class formFunctions {
    static convertIntToArr(inputArr, num) {
        let arr = []
        for (let i = 0; i <= num; i++) {
            arr.push({
                htmlId: inputArr.htmlId || this.generateId(),
                name: inputArr.name || inputArr[i]
            })
        };
        return arr;
    };
    static setListItem(arg, list) {
        return list.map(listItem => 
            listItem.htmlId !== arg.htmlId ? listItem : arg
        );
    };
    static removeListItem(item, list) {
        const filteredList = list.filter(lItem => {
            return lItem.htmlId !== item.htmlId
        })
        console.log('list: ',list)
        console.log('list: ',filteredList)
        return list.filter(listItem => {
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
