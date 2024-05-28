"""
560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum 
equals to k. A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2

Constraints:
    1 <= nums.length <= 2 * 104
    -1000 <= nums[i] <= 1000
    -107 <= k <= 107

https://leetcode.com/problems/subarray-sum-equals-k/description/
Time: O(n) | Space: O(n)
"""

class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count, total = 0, 0
        hash_map = {}
        for num in nums:
            total += num
            if total == k:
                count += 1
            if total - k in hash_map:
                count += hash_map[total - k]
            hash_map[total] = hash_map[total] + 1 if total in hash_map else 1
        return count
