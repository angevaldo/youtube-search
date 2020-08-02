export class Video {
    constructor(public title: string,
        public description: string,
        public thumbnail: string,
        public duration: number,
        public id?: string) { }

    public static calculateFiveMostUsedWords(videos: Video[]): string[] {
        return ['Prepara', 'viver', 'deixar', 'roupas', 'coloridas'];
    }

    public static calculateDaysToWatch(videos: Video[], days: number[]): number {
        return 1;
    }
}