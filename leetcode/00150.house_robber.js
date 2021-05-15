// 198. House Robber

// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, the only constraint 
// stopping you from robbing each of them is that adjacent houses have security 
// systems connected and it will automatically contact the police if two adjacent 
// houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the police.

var rob = function(nums) {
    let evenIdxSum = 0;
    let oddIdxSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) {
            evenIdxSum = Math.max(nums[i] + evenIdxSum, oddIdxSum);
        } else {
            oddIdxSum = Math.max(nums[i] + oddIdxSum, evenIdxSum);
        }
    }
    
    return Math.max(evenIdxSum, oddIdxSum);
};

// time o(n) | space o(1)
// https://leetcode.com/problems/house-robber/