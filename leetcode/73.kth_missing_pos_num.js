// 1539. Kth Missing Positive Number

// Given an array arr of positive integers sorted in a strictly increasing order, 
// and an integer k.

// Find the kth positive integer that is missing from this array.

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. 
// The 5th missing positive integer is 9.

var findKthPositive = function(arr, k) {
    
    let set = new Set();
    
    for(const num of arr) set.add(num);
    
    let i = 1
    while(k > 0) {
        if(!set.has(i)) k--; i++;
    }
    return i - 1;
};

// time o(n + m)
// space o(n)

// https://leetcode.com/problems/kth-missing-positive-number/