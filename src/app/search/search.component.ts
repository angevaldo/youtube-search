import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { YoutubeService } from '../shared';
import { Video } from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysToWatch: number = 0;
  fiveMostUsedWords: string[];
  videos: Video[];

  dataSource: MatTableDataSource<any>;

  formSearch: FormGroup;
  formTimeExpend: FormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  private fillTableData() {
    this.dataSource = new MatTableDataSource<any>(this.videos);
    this.dataSource.paginator = this.paginator;
  }

  private getTimeExpendDaily(): number[] {
    let timeWeekDays: number[] = [];
    Object.keys(this.formTimeExpend.controls).forEach(key => {
      timeWeekDays.push(this.formTimeExpend.get(key).value);
    });
    return timeWeekDays;
  }

  constructor(
    private fb: FormBuilder,
    private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      term: ['', [Validators.required]]
    });

    let arrayFields: any = {};
    for (let i = 0; i < 7; i++) {
      arrayFields['weekDay' + i] = ['', [Validators.required, Validators.min(0), Validators.max(1440)]];
    }
    this.formTimeExpend = this.fb.group(arrayFields);
  }

  search() {
    this.videos = [];
    this.youTubeService.getVideosByTermMock('Pj masks', 2).forEach(element => {
      this.videos.push(Video.asVideoFromYoutubeJson(element));
    });

    this.fiveMostUsedWords = Video.calculateFiveMostUsedWords(this.videos);
    this.fillTableData();
  }

  onChangeWeekField() {
    this.daysToWatch = 0;
  }

  calculateTimeExpend() {
    let timeWeekDays: number[] = this.getTimeExpendDaily();
    let timeTotal: number = 0;
    timeWeekDays.forEach(element => { timeTotal += element; });

    if (timeTotal == 0) {
      console.log("Time total invalid.")
      return
    }

    this.daysToWatch = Video.calculateDaysToWatch(this.videos, timeWeekDays);
  }

}
