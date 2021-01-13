//Maximum Subarray
//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// example-1
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 64
// Explanation: [4,-1,2,1] has the largest sum = 6.

//example-2
// Input: nums = [0]
// Output: 0

//example-3
// Input: nums = [-2147483647]
// Output: -2147483647


var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    let largestSum = Math.max(...nums);
    let table = [nums[0]];
    
    for(let i = 1; i < nums.length; i++) {
        table[i] = Math.max(nums[i], nums[i] + table[i - 1]);
        largestSum = Math.max(largestSum, table[i])
    }
    
    return largestSum;
};

// time o(n)

// https://leetcode.com/problems/maximum-subarray/
