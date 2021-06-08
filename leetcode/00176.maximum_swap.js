// 670. Maximum Swap

// You are given an integer num. You can swap two digits at most once to get the maximum valued number.

// Return the maximum valued number you can get.

// Example 1:
// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.

var maximumSwap = function(num) {
    if (num < 10) return num;
    
    let arr = num.toString().split("");
    
    for(let i = 0; i < arr.length; i++) {
        let maxIdx = findMaxIdx(arr, i);
        if(arr[maxIdx] > arr[i]) {
            swap(arr, i, maxIdx);
            return parseInt(arr.join(""));
        }
    }
    return parseInt(arr.join(""));
};

const findMaxIdx = (array, idx) => {
    let maxIdx = null;
    let maxNum = -Infinity;
    for(let i = idx; i < array.length; i++) {
        if(array[i] >= maxNum) {
            maxNum = array[i];
            maxIdx = i
        }
    }
    
    return maxIdx;
}

const swap = (array, i , j) => {
    [ array[i], array[j] ] = [ array[j], array[i] ];
}

// time o(n^2)
// space o(d) where d is the number of digits
// https://leetcode.com/problems/maximum-swap/