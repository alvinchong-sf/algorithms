"""
643. Maximum Average Subarray I
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and 
return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:
Input: nums = [5], k = 1
Output: 5.00000

Constraints:
    n == nums.length
    1 <= k <= n <= 105
    -104 <= nums[i] <= 104

https://leetcode.com/problems/maximum-average-subarray-i/description/
Time: O(n) | Space: O(1)
"""

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        n = len(nums)
        j = 0
        max_avg = float("-inf")
        curr_sum = 0

        for i in range(n):
            curr_sum += nums[i]
            size = i - j + 1
            if size == k:
                max_avg = max(curr_sum / k, max_avg)
                curr_sum -= nums[j]
                j += 1
        return max_avg
