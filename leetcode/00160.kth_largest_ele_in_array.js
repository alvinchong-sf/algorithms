var findKthLargest = function(nums, k) {
    let heap = buildHeap(nums);
    let val = null;
    
    for(let count = 0; count < k; count++) {
        val = deleteMax(nums);
    }
    return val;
};

const buildHeap = (array) => {
    for(let i = array.length - 1; i >= 0; i--) {
        siftDown(array, array.length, i);
    }
    return array;
}

const siftDown = (array, n, idx) => {
    let leftIdx = idx * 2 + 1;
    let rightIdx = idx * 2 + 2;
    
    let leftVal = leftIdx >= n ? -Infinity : array[leftIdx];
    let rightVal = rightIdx >= n ? -Infinity : array[rightIdx];
    
    if(array[idx] > leftVal && array[idx] > rightVal) return;
    
    let swapIdx;
    if(leftVal > rightVal) {
        swapIdx = leftIdx;
    } else {
        swapIdx = rightIdx;
    }
    swap(array, idx, swapIdx);
    siftDown(array, n, swapIdx);
}

const deleteMax = (array) => {
    if(!array.length) return null;
    if(array.length === 1) return array[0];
    swap(array, 0, array.length - 1);
    let deletedVal = array.pop();
    siftDown(array, array.length, 0);
    return deletedVal;
}

const swap = (array, i , j) => {
    [ array[i], array[j] ] = [ array[j], array[i] ];
}

// time o(n log(n))
// space o(1);
// https://leetcode.com/problems/kth-largest-element-in-an-array/