// 1550. Three Consecutive Odds

// Given an integer array arr, return true if there are three consecutive odd 
// numbers in the array. Otherwise, return false.

//Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.

var threeConsecutiveOdds = function(arr) {    
    if(arr.length < 3) return false;
    let i = 0;
    let j = i + 1;
    let k = i + 2;
    while(arr[k] !== undefined) {
        if((arr[i] % 2 !== 0) && (arr[j] % 2 !== 0) && (arr[k] % 2 !== 0)) {
            return true;
        }
        i++;
        j++;
        k++;
    }
    return false;
};

// time o(n)
// space o(1)
// https://leetcode.com/problems/three-consecutive-odds/