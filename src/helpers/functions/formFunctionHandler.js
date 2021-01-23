class formFunctions {
    static convertIntToArr(element, num) {
        let arr = []
        for (let i = 1; i <= num; i++) {
            arr.push(element + i)
        }
        return arr;
    }
    static filterListItem(item, list) {
        return list.filter(listItem => {return listItem !== item})
    };
};

export default formFunctions;
