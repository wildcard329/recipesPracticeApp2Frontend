class formFunctions {
    static convertArrToHtml(inputArr) {
        // this maps an array to html objects
        const outputArr = inputArr.map(item => {
            return {
                htmlId: inputArr?.htmlId || this.generateId(),
                name: item?.name || '',
                recipe: item?.recipe || null
            };
        });
        return outputArr;
    };
    static editListItem(item, value) {
        // this sets an instruction or ingredient before it is passed to the reducer
        return {
            htmlId: item.htmlId,
            name: value,
            recipe: item.recipe
        }
    };
    static setListItem(item, list) {
        // this enables editing of the html, which if set in the component would have to use every key from the ingredient object when only the name key is needed
        const newList = list.map(listItem => 
            listItem.htmlId !== item.htmlId ? listItem : item
        );
        return newList
    };
    static removeListItem(item, list) {
        // this removes a list element from the html and from state
        const filteredList = list.filter(listItem => {
            return listItem.htmlId !== item.htmlId
        });
        return filteredList;
    };
    static generateId() {
        // this generates a unique id for html elements
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }
};

export default formFunctions;
