export class CommonFunctions {

    static sortByWordFrequency(elements: any[]) {
        let frequency = {};
        elements.forEach(function (value) { frequency[value] = 0; });

        let uniques = elements.filter(function (value) {
            if (/^[a-zA-Z0-9\s\-\,]{2,}.\*?$/.test(value)) {
                return ++frequency[value] == 1;
            }
        });

        return uniques.sort(function (a, b) {
            return frequency[b] - frequency[a];
        });
    }

}