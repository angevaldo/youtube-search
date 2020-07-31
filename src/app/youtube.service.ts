import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyARtaa71t2GWKeXIKDul1FmvL_jUcgVWng';

  constructor(public http: HttpClient) { }

  getVideosByTerm(term, maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' 
                  + this.apiKey + '&q=' + term 
                  + '&part=snippet&type=video,id&maxResults=' + maxResults;

    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
