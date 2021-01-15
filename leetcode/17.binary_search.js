// Binary Search

// Given a sorted (in ascending order) integer array nums of n elements and a 
// target value, write a function to search target in nums. If target exists, 
// then return its index, otherwise return -1

var search = function(nums, target) {
    if(!nums.length) return -1;
    
    let midIdx = Math.floor(nums.length / 2);
    let midPos = nums[midIdx];
    
    if(midPos === target) {
        return midIdx;
    } else if( target < midPos) {
        let leftArr = nums.slice(0, midIdx);
        return search(leftArr, target);
    } else {
        let rightArr = nums.slice(midIdx + 1);
        let res = search(rightArr, target);
        if(res === -1) {
            return -1;
        } else {
            return midIdx + 1 + res;
        }
    }
};

// time: o(log(n))

// https://leetcode.com/problems/binary-search/
