class formFunctions {
    static convertIntToArr(inputArr, num) {
        let arr = []
        for (let i = 1; i <= num; i++) {
            arr.push({
                htmlId: this.generateId(),
                name: inputArr ? inputArr[i] : null
            })
        };
        return arr;
    };
    static filterListItem(item, list) {
        return list.filter(listItem => {
            console.log('item: ',item,'\nlist item: ',listItem)
            return listItem !== item});
    };
    static removeListItem(item, list) {
        return list.filter(listItem => {
            console.log(`item: ${item}\nlist item: ${listItem.htmlId}\nitem value: ${listItem.value}\ntarget: ${item === listItem.htmlId}`)
            return listItem.htmlId !== item.htmlId
        });
    };
    static generateId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }
};

export default formFunctions;
