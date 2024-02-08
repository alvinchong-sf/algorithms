function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currEle = arr[i];
        for(var j = i - 1; j >= 0 && currEle < arr[j]; j--) {
            // debugger
            arr[j + 1] = arr[j];
            // debugger
        }
        // debugger
        arr[j + 1] = currEle;
    }
    // debugger
    return arr;
}

// let array = [2, -1, 4, 3, 7, 3];
// insertionSort(array);

module.exports = {
    insertionSort
};