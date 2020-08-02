export class CommonFunctions {

    static sortByFrequency(elements: any[]) {
        let frequency = {};
        elements.forEach(function (value) { frequency[value] = 0; });

        let uniques = elements.filter(function (value) {
            return ++frequency[value] == 1;
        });

        return uniques.sort(function (a, b) {
            return frequency[b] - frequency[a];
        });
    }

}