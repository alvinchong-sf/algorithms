// Search Insert Position

// Given a sorted array of distinct integers and a target value, return the 
// index if the target is found. If not, return the index where it would be if 
// it were inserted in order.

var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(num >= target) return i
    }
    return nums.length;
};

// time o(n) 
// https://leetcode.com/problems/search-insert-position/