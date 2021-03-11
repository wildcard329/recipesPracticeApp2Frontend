class SampleRotator {
    static iterateList(arr, lowIndex, highIndex) {
        const display = []
        switch(true) {
            case (highIndex > arr.length):
                return arr;
            case (lowIndex < highIndex):
                for (let i = lowIndex; i < highIndex; i++) {
                    display.push(arr[i])
                }
                return display;
            case (lowIndex > highIndex):
                for (let i = lowIndex; i < arr[arr.length]; i++) {
                    console.log('index: ',i,'\nelement: ',arr[i])
                    display.push(arr[i])
                }
                for (let i = arr[0]; i < arr[highIndex]; i++) {
                    display.push(arr[i])
                }
                return display;
            default:
                return arr;
        }
    }
}

export default SampleRotator;
