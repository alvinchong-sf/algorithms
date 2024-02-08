function binarySearch(array, target) {
    if (!array.length) return false;

    let midIdx = Math.floor(array.length / 2);
    let midEle = array[midIdx];

    if(midEle === target) {
        return true;
    } else if(target < midEle) {
        let leftArr = array.slice(0, midIdx);
        return binarySearch(leftArr, target);
    } else {
        let rightArr = array.slice(midIdx + 1);
        return binarySearch(rightArr, target)
    }
}

function binarySearchIndex(array, target) {
    if (!array.length) return -1;

    let midIdx = Math.floor(array.length / 2);
    let midEle = array[midIdx];

    if(midEle === target) {
        return midIdx;
    } else if(target < midEle) {
        let leftArr = array.slice(0, midIdx);
        return binarySearchIndex(leftArr, target);
    } else {
        let rightArr = array.slice(midIdx + 1);
        let res = binarySearchIndex(rightArr, target);
        return (res === -1) ? -1 : res + midIdx + 1;
    }
}

// console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12));


module.exports = {
    binarySearch,
    binarySearchIndex
};