"""
1248. Count Number of Nice Subarrays
Given an array of integers nums and an integer k. A continuous subarray is called nice if there 
are k odd numbers on it. Return the number of nice sub-arrays.

Example 1:
Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

Example 2:
Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.

Example 3:
Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16

Constraints:
    1 <= nums.length <= 50000
    1 <= nums[i] <= 10^5
    1 <= k <= nums.length

https://leetcode.com/problems/count-number-of-nice-subarrays/description
Time: O(n) | Space: O(n)
"""

class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        for idx, num in enumerate(nums):
            nums[idx] = 0 if num % 2 == 0 else 1
        return self.subarraySum(nums, k)

    def subarraySum(self, nums: List[int], k: int) -> int:
        count, total = 0, 0
        hash_map = {}
        for num in nums:
            total += num
            if total == k:
                count += 1
            if total - k in hash_map:
                count += hash_map[total - k]
            if total in hash_map:
                hash_map[total] += 1
            else:
                hash_map[total] = 1
        return count