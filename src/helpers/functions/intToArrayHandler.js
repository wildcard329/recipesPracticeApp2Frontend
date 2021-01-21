class createArray {
    static convertIntToArr(element, num) {
        let arr = []
        for (let i = 1; i <= num; i++) {
            arr.push(element + i)
        }
        return arr;
    }
}

export default createArray;
