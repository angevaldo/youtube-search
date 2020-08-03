import { CommonFunctions } from '../utils';

export class Video {

    constructor(public title: string,
        public description: string,
        public thumbnailsUrl: string,
        public duration: number,
        public id?: string) { }

    static calculateFiveMostUsedWords(videos: Video[]): string[] {
        var terms: string[] = [];
        videos.forEach(element => {
            terms = terms.concat(element.title.split(' ')).concat(element.description.split(' '));
        });

        terms = CommonFunctions.sortByWordFrequency(terms);
        var mostUsedWords: string[] = [];
        var i :number = 0;
        while (i < 5 && i < terms.length) {
            mostUsedWords.push(terms[i]);
            i++;
        }

        return mostUsedWords;
    }

    static calculateDaysToWatch(videos: Video[], timeExpendDaily: number[]): number {

        // getting longest time expend daily
        var longestTimeExpendDaily: number = timeExpendDaily.reduce((maxTime, time) => {
            return maxTime > time ? maxTime : time;
        }, 0);

        // populating video times array
        var videosTimes: number[] = [];
        videos.forEach(element => {
            if (element.duration <= longestTimeExpendDaily) {
                videosTimes.push(element.duration);
            }
        });

        if (videosTimes.length == 0) {
            throw new Error('Time expend daily must be equal or greater than smallest video.');
        }

        // init calculation
        var countDayToWatch = 1;
        var currentDay = 0;
        var timeLeftDay = timeExpendDaily[currentDay];

        for (let i = 0; i < videosTimes.length; i++) {
            const currentVideoTime = videosTimes[i];

            // finding a day to watch the video completely
            while (currentVideoTime > timeLeftDay) {
                currentDay = currentDay < 7 ? currentDay + 1 : 0;
                timeLeftDay = timeExpendDaily[currentDay];
                countDayToWatch++;
            }

            timeLeftDay -= currentVideoTime;
        }

        return countDayToWatch;
    }

    static asVideoFromYoutubeJson(element: any): Video {
        return new Video(element.snippet.title,
            element.snippet.description,
            element.snippet.thumbnails.default.url,
            element.duration,
            element.id.videoId);
    }

}