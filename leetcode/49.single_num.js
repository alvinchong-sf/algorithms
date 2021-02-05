// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except 
// for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity 
// and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

var singleNumber = function(nums) {
    let res = nums[0];
    for(let i = 1; i < nums.length; i++) {
        res = res ^ nums[i];
    }
    return res;
};

// time o(n)
// space o(1)
// https://leetcode.com/problems/single-number/