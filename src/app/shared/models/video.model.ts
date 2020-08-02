import { CommonFunctions } from '../utils';

export class Video {

    constructor(public title: string,
        public description: string,
        public thumbnailsUrl: string,
        public duration: number,
        public id?: string) { }

    static calculateFiveMostUsedWords(videos: Video[]): string[] {
        let terms: string[] = [];
        videos.forEach(element => {
            terms = terms.concat(element.title.split(' ')).concat(element.description.split(' '));
        });

        terms = CommonFunctions.sortByFrequency(terms);

        return [terms[0], terms[1], terms[2], terms[3], terms[4]];
    }

    static calculateDaysToWatch(videos: Video[], timeExpendDaily: number[]): number {
        return timeExpendDaily[0] + timeExpendDaily[1];
    }

    static asVideoFromYoutubeJson(element: any): Video {
        return new Video(element.snippet.title,
            element.snippet.description,
            element.snippet.thumbnails.default.url,
            2,
            element.id.videoId);
    }

}