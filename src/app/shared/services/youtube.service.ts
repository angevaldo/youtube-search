import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Video } from '../models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey: string = '<YOUR_API_KEY>';
  maxResults: number = 200;

  constructor(public http: HttpClient) { }

  static getDurationsInMinutes(duration: string): number {
    var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    var hours: number = 0, minutes = 0, seconds = 0, totalMinutes;

    if (reptms.test(duration)) {
      var matches = reptms.exec(duration);
      if (matches[1]) hours = Number(matches[1]);
      if (matches[2]) minutes = Number(matches[2]);
      if (matches[3]) seconds = Number(matches[3]);
      totalMinutes = hours * 60 + minutes + seconds / 60;
    }

    return totalMinutes;
  }

  static asVideoFromYoutubeJson(element: any): Video {
      return new Video(element.snippet.title,
          element.snippet.description,
          element.snippet.thumbnails.default.url,
          element.id.videoId);
  }

  getVideosDurations(videos: Video[]): Observable<Object> {
    var ids: string[] = [];
    videos.forEach(element => {
      ids.push(element.id);
    });

    let url = 'https://www.googleapis.com/youtube/v3/videos'
      + '?key=' + this.apiKey
      + '&part=contentDetails'
      + '&id=' + ids;

    return this.http.get(url).pipe(map((res) => { return res; }));
  }

  getVideosByTerm(term: string): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search'
      + '?key=' + this.apiKey
      + '&q=' + term
      + '&part=snippet'
      + '&type=video,id'
      + '&maxResults=' + this.maxResults;

    return this.http.get(url).pipe(map((res) => { return res; }));
  }

}
