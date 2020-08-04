import { Video } from './video.model';
import { TestBed } from '@angular/core/testing';
import { YoutubeService } from '../services/youtube.service';

import * as videosListJson from '../../../assets/data/videos-list-sample.json';
import * as durationsListJson from '../../../assets/data/durations-list-sample.json';

describe('Video', () => {
    var videos: Video[] = [];
    for (let element of videosListJson["items"]) {
        videos.push(YoutubeService.asVideoFromYoutubeJson(element));
    }
    var i: number = 0;
    for (let element of durationsListJson["items"]) {
      videos[i].duration = YoutubeService.getDurationsInMinutes(element.contentDetails.duration);
      i++;
    }

    beforeEach(() => TestBed.configureTestingModule({ }));

    it('should calculate five most used words', () => {
        const fiveMostUsedWords: string[] = Video.calculateFiveMostUsedWords(videos);
        expect(fiveMostUsedWords).toEqual(['sed', 'sit', 'adipiscing', 'ipsum', 'dolor']);
    });

    it('should calculate days to watch', () => {
        var days = Video.calculateDaysToWatch(videos, [15, 120, 30, 150, 20, 40, 90]);
        expect(days).toEqual(8);
    });
});