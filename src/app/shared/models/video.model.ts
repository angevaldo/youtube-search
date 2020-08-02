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

        terms = CommonFunctions.sortByFrequency(terms);

        return [terms[0], terms[1], terms[2], terms[3], terms[4]];
    }

    static calculateDaysToWatch(videos: Video[], timeExpendDaily: number[]): number {

        // getting longest time expend
        var longestTimeExpendDaily: number = timeExpendDaily.reduce((maxTime, time) => {
            return maxTime > time ? maxTime : time;
        }, 0);

        // getting video times
        var videosTimes: number[] = [];
        videos.forEach(element => {
            if (element.duration <= longestTimeExpendDaily) {
                videosTimes.push(element.duration);
            }
        });

        // init calculation
        var days = 1;
        var currentDay = 0;
        var timeLeftDay = timeExpendDaily[currentDay];

        for (let i = 0; i < videosTimes.length; i++) {
            const currentVideoTime = videosTimes[i];

            // finding a day to watch the video completely
            while (currentVideoTime > timeLeftDay) {
                currentDay = currentDay < 7 ? currentDay + 1 : 0;
                timeLeftDay = timeExpendDaily[currentDay];
                days++;
            }

            timeLeftDay -= currentVideoTime;
        }

        return days;
    }

    static asVideoFromYoutubeJson(element: any): Video {
        return new Video(element.snippet.title,
            element.snippet.description,
            element.snippet.thumbnails.default.url,
            element.duration,
            element.id.videoId);
    }

}