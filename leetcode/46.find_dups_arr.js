// 442. Find All Duplicates in an Array

// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements 
// appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

var findDuplicates = function(nums) {
    
    let result = [];
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let resIdx = Math.abs(num) - 1;
        if(nums[resIdx] < 0) {
            result.push(Math.abs(num)); 
        } else {
            nums[resIdx] = nums[resIdx] * (-1);   
        }
    }
    return result;
};

// time o(n)
// space o(n) but the problem wanted us to solve this in o(1) extra space not including output arr
// https://leetcode.com/problems/find-all-duplicates-in-an-array/