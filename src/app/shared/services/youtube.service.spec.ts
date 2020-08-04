import { TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtube.service';
import { HttpClientModule } from '@angular/common/http';

import { Video } from '../models';

import * as videosListJson from '../../../assets/data/videos-list-sample.json';
import * as durationsListJson from '../../../assets/data/durations-list-sample.json';

describe('YoutubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
    providers: [YoutubeService]
  }));

  it('should be created', () => {
    const service: YoutubeService = TestBed.get(YoutubeService);
    expect(service).toBeTruthy();
  });

  it('should get converted youtube duration in minutes', () => {
    const duration = YoutubeService.getDurationsInMinutes("PT30M30S");
    expect(duration).toEqual(30.5);
  });

  it('should get duration from json', () => {
    var durations: number[] = [];
    for (let element of durationsListJson["items"]) {
      durations.push(YoutubeService.getDurationsInMinutes(element.contentDetails.duration));
    }
    expect(durations).toEqual([20, 30, 60, 90, 200, 30, 40, 20, 60, 15]);
  }); 

  it('should convert youtube json to Video class', () => {
      var video: Video = YoutubeService.asVideoFromYoutubeJson(videosListJson["items"][0]);
      expect(video.id).toEqual('1');
      expect(video.title).toEqual('labore et dolore magna aliqua. Sapien pellentesque habitant');
      expect(video.description).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.');
      expect(video.thumbnailsUrl).toEqual('./assets/images/thumbnail.png');
  });
});
