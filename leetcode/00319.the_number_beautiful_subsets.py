"""
2597. The Number of Beautiful Subsets
You are given an array nums of positive integers and a positive integer k.
A subset of nums is beautiful if it does not contain two integers with an absolute difference 
equal to k. Return the number of non-empty beautiful subsets of the array nums.
A subset of nums is an array that can be obtained by deleting some (possibly none) elements 
from nums. Two subsets are different if and only if the chosen indices to delete are different.

Example 1:
Input: nums = [2,4,6], k = 2
Output: 4
Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
It can be proved that there are only 4 beautiful subsets in the array [2,4,6].

Example 2:
Input: nums = [1], k = 1
Output: 1
Explanation: The beautiful subset of the array nums is [1].
It can be proved that there is only 1 beautiful subset in the array [1].

Constraints:
    1 <= nums.length <= 20
    1 <= nums[i], k <= 1000

https://leetcode.com/problems/the-number-of-beautiful-subsets/description/
Time: O(n * 2^n) | Space: O(n * 2^n)
"""

class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        non_beautiful_set = set()
        beautiful = 0
        subsets = [[]]
        for num in nums:
            n = len(subsets)
            for i in range(n):
                copy_sub = subsets[i].copy()
                subset = tuple(copy_sub)
                copy_sub.append(num)
                if subset in non_beautiful_set:
                    non_beautiful_set.add(subset)
                else:
                    subsets.append(copy_sub)
                    subset = tuple(copy_sub)
                    if self.is_beautiful(subset, num, k, non_beautiful_set):
                        beautiful += 1
        return beautiful
    
    def is_beautiful(self, subset, num, k, non_beautiful_set):
        for subset_num in subset:
            if abs(subset_num - num) == k:
                non_beautiful_set.add(subset)
                return False
        return True