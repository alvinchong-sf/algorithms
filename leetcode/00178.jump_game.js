// 55. Jump Game

// Given an array of non-negative integers nums, you are initially positioned at 
// the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

var canJump = function(nums) {
    if(nums.length === 1) return true;
    
    let bool = true;
    let furthestIdx = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--) {
        const diffIdx = furthestIdx - i;
        const num = nums[i];
        if(num >= diffIdx) {
            bool = true;
            furthestIdx = i;
        } else {
            bool = false;
        }
    }
    return bool;
};

// time o(n) | space o(1)
// https://leetcode.com/problems/jump-game/