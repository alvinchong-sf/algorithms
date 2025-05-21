/*
300. Longest Increasing Subsequence
Given an integer array nums, return the length of the longest strictly increasing.

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1

Constraints:
    1 <= nums.length <= 2500
    -104 <= nums[i] <= 104

TODO: Binary Tree Segmentation
Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?

https://leetcode.com/problems/longest-increasing-subsequence/description/

Time: O(n)^2 | Space: O(n)
DP bottoms up solution
*/

function lengthOfLIS(nums: number[]): number {
    const dp = new Array(nums.length).fill(1);
    let longest = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        longest = Math.max(longest, dp[i]);
    }
    return longest;
};