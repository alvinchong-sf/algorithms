function merge(array1, array2) {
    let newArr = [];

    while (array1.length && array2.length) {
        if(array1[0] < array2[0]) {
            newArr.push(array1.shift())
        } else {
            newArr.push(array2.shift())
        }
    }

    return newArr.concat(array1).concat(array2)
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    let midIdx = Math.floor( array.length / 2 );
    let leftArr = array.slice(0, midIdx);
    let rightArr = array.slice(midIdx);

    let sortedLeft = mergeSort(leftArr);
    let sortedRight = mergeSort(rightArr);

    return merge(sortedLeft, sortedRight);
}

module.exports = {
    merge,
    mergeSort
};