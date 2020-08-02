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

  daysToExpend: number = 0;
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

  private getTimeDaily(): number[] {
    return [1];
  }

  constructor(
  	private fb: FormBuilder,
    private youTubeService: YoutubeService) { }

  ngOnInit() {
  	this.formSearch = this.fb.group({
  		term: ['', [Validators.required]]
  	});
  	this.formTimeExpend = this.fb.group({
  		sun: ['', [Validators.required]],
  		mon: ['', [Validators.required]],
  		tue: ['', [Validators.required]],
  		wed: ['', [Validators.required]],
  		thu: ['', [Validators.required]],
  		fri: ['', [Validators.required]],
  		sat: ['', [Validators.required]]
  	});
  }

  search() {
    this.videos = this.youTubeService.getVideosByTermMock('Pj masks', 2);
    this.fiveMostUsedWords = Video.calculateFiveMostUsedWords(this.videos);
    this.fillTableData();
  }

  calculateTimeExpend() {
    this.daysToExpend = Video.calculateDaysToWatch(this.videos, this.getTimeDaily());
  }

}
