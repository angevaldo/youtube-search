import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { YoutubeService } from '../shared';
import { Video } from '../shared';

import durationsListSample from '../../assets/data/durations-list-sample.json';
import videosListSample from '../../assets/data/videos-list-sample.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  weekDay: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysToWatch: number = 0;
  fiveMostUsedWords: string[] = [];
  videos: Video[] = [];
  mocked: boolean = false;

  dataSource: MatTableDataSource<any>;
  paginator: MatPaginator;

  formSearch: FormGroup;
  formTimeExpend: FormGroup;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.dataSource.paginator = this.paginator;
  }

  private getTimeExpendDaily(): number[] {
    var timesWeekDay: number[] = [];
    Object.keys(this.formTimeExpend.controls).forEach(key => {
      timesWeekDay.push(this.formTimeExpend.get(key).value);
    });
    return timesWeekDay;
  }

  private resetResults() {
    this.daysToWatch = 0;
    this.fiveMostUsedWords = [];
    this.videos = [];
    this.dataSource.data = this.videos;
  }

  private showResults() {
    this.fiveMostUsedWords = Video.calculateFiveMostUsedWords(this.videos);
    this.dataSource.data = this.videos;
  }

  private getVideosFromSampleJson() {
    for (let element of videosListSample["items"]) {
      this.videos.push(Video.asVideoFromYoutubeJson(element));
    }
    var i: number = 0;
    for (let element of durationsListSample["items"]) {
      this.videos[i].duration = YoutubeService.getDurationsInMinutes(element.contentDetails.duration);
      i++;
    }
    this.showResults();

    this.formTimeExpend.get("weekDay0").setValue(15);
    this.formTimeExpend.get("weekDay1").setValue(120);
    this.formTimeExpend.get("weekDay2").setValue(30);
    this.formTimeExpend.get("weekDay3").setValue(150);
    this.formTimeExpend.get("weekDay4").setValue(20);
    this.formTimeExpend.get("weekDay5").setValue(40);
    this.formTimeExpend.get("weekDay6").setValue(90);
  }

  private getVideosDurations() {
    this.youTubeService.getVideosDurations(this.videos).subscribe(
      data => {
        var i: number = 0;
        for (let element of data["items"]) {
          this.videos[i].duration = YoutubeService.getDurationsInMinutes(element.contentDetails.duration);
          i++;
        }
        this.showResults();
      },
      err => {
        this.matSnackBar.open(err.error.error.message, 'Ok');
      });
  }

  private getVideosFromYoutube() {
    this.youTubeService.getVideosByTerm(this.formSearch.value.term).subscribe(
      data => {
        for (let element of data["items"]) {
          this.videos.push(Video.asVideoFromYoutubeJson(element));
        }
        this.getVideosDurations();
      },
      err => {
        this.matSnackBar.open(err.error.error.message, 'Ok');
      });
  }

  constructor(
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar,
    private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      term: ['', [Validators.required]]
    });

    var timeExpendFields: any = {};
    for (let i = 0; i < 7; i++) {
      timeExpendFields['weekDay' + i] = ['', [Validators.required, Validators.min(0), Validators.max(1440)]];
    }
    this.formTimeExpend = this.fb.group(timeExpendFields);

    this.dataSource = new MatTableDataSource<any>(this.videos);
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  onChangeWeekField() {
    this.daysToWatch = 0;
  }

  search() {
    this.resetResults();
    this.getVideosFromYoutube();
  }

  setMocked(mocked: boolean) {
    this.mocked = mocked;

    this.resetResults();

    if (this.mocked) {
      this.getVideosFromSampleJson();
    }
  }

  calculateTimeExpend() {
    var timeWeekDay: number[] = this.getTimeExpendDaily();
    var timeTotal: number = 0;
    timeWeekDay.forEach(element => { timeTotal += element; });

    try {
      if (timeTotal == 0) {
        this.matSnackBar.open('Time total must be greater than Zero.', 'Ok');
      } else {
        this.daysToWatch = Video.calculateDaysToWatch(this.videos, timeWeekDay);
      }
    } catch (error) {
      this.matSnackBar.open(error.message, 'Ok');
    }
  }

}