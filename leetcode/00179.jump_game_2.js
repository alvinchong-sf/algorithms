// 45. Jump Game II

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. 
// Jump 1 step from index 0 to 1, then 3 steps to the last index.


// DP solution
var jump = function(nums) {
    let table = new Array(nums.length).fill(Infinity);
    table[table.length - 1] = 0;
    
    for(let i = nums.length - 1; i >= 0; i--) {
        const jump = nums[i];
        const maxJump = Math.min(nums.length - 1, i + jump);
        for(let j = i + 1; j <= maxJump; j++) {
            table[i] = Math.min(table[i], table[j] + 1)
        }
    }
    
    return table[0];
};

// time o(n^2) | space o(n)
// https://leetcode.com/problems/jump-game-ii/