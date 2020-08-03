import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { YoutubeService } from '../shared';
import { Video } from '../shared';

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

  dataSource: MatTableDataSource<any>;

  formSearch: FormGroup;
  formTimeExpend: FormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private fillTableData() {
    this.dataSource = new MatTableDataSource<any>(this.videos);
    this.dataSource.paginator = this.paginator;
  }

  private getTimeExpendDaily(): number[] {
    let timesWeekDay: number[] = [];
    Object.keys(this.formTimeExpend.controls).forEach(key => {
      timesWeekDay.push(this.formTimeExpend.get(key).value);
    });
    return timesWeekDay;
  }

  constructor(
    private fb: FormBuilder,
    private matSnackBar: MatSnackBar,
    private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      term: ['', [Validators.required]]
    });

    let timeExpendFields: any = {};
    for (let i = 0; i < 7; i++) {
      timeExpendFields['weekDay' + i] = ['', [Validators.required, Validators.min(0), Validators.max(1440)]];
    }
    this.formTimeExpend = this.fb.group(timeExpendFields);
  }

  private resetResults() {
    this.videos = [];
    this.fiveMostUsedWords = [];
  }

  private showResults() {
    this.fiveMostUsedWords = Video.calculateFiveMostUsedWords(this.videos);
    this.fillTableData();
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

  search() {
    this.resetResults();

    /**/
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
    /**/

    /*
    this.youTubeService.getVideosByTermMock(this.formSearch.value.term).forEach(element => {
      this.videos.push(Video.asVideoFromYoutubeJson(element));
    });
    this.showResults();
    /**/

  }

  onChangeWeekField() {
    this.daysToWatch = 0;
  }

  calculateTimeExpend() {
    let timeWeekDay: number[] = this.getTimeExpendDaily();
    let timeTotal: number = 0;
    timeWeekDay.forEach(element => { timeTotal += element; });

    try {
      if (timeTotal == 0) {
        this.matSnackBar.open('ERROR: Time total must be greater than Zero.', 'Ok');
      } else {
        this.daysToWatch = Video.calculateDaysToWatch(this.videos, timeWeekDay);
      }
    } catch (error) {
      this.matSnackBar.open(error.message, 'Ok');
    }
  }

}
