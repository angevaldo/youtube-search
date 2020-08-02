export class Video {

    constructor(public title: string,
        public description: string,
        public thumbnailsUrl: string,
        public duration: number,
        public id?: string) { }

    public static calculateFiveMostUsedWords(videos: Video[]): string[] {
        return ['Prepara', 'viver', 'deixar', 'roupas', 'coloridas'];
    }

    public static calculateDaysToWatch(videos: Video[], timeExpendDaily: number[]): number {
        return timeExpendDaily[0] + timeExpendDaily[1];
    }

    public static asVideoFromYoutubeJson(element: any): Video {
        return new Video(element.snippet.title,
            element.snippet.description,
            element.snippet.thumbnails.default.url,
            2,
            element.id.videoId);
    }

}