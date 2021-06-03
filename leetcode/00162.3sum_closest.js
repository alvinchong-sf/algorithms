// 16. 3Sum Closest

// Given an array nums of n integers and an integer target, find three integers 
// in nums such that the sum is closest to target. Return the sum of the three 
// integers. You may assume that each input would have exactly one solution.

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    let total = null;
    let smallestDiff = Infinity;
    
    for(let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            let diff = Math.abs(target - sum);
            if(diff < smallestDiff) {
                smallestDiff = diff;
                total = sum;
            }
            if(sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else {
                left++; right--;
            }
            
        }
    }
    return total;
};

// time o(n log(n))
// space o(1)
// https://leetcode.com/problems/3sum-closest/