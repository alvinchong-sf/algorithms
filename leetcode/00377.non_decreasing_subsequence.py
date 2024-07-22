"""
491. Non-decreasing Subsequences
Given an integer array nums, return all the different possible non-decreasing subsequences of 
the given array with at least two elements. You may return the answer in any order.

Example 1:
Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

Example 2:
Input: nums = [4,4,3,2,1]
Output: [[4,4]]

Constraints:
    1 <= nums.length <= 15
    -100 <= nums[i] <= 100

https://leetcode.com/problems/non-decreasing-subsequences/description/
Time: O(2^n) | Space: O(2^n)
"""

class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        visited = set()
        temp = []
        results = []
        self.dfs(0, nums, temp, results, n, visited)
        return results
        
    def dfs(self, i, nums, temp, results, n, visited):
        if i >= n: return
        for j in range(i, n):
            if not temp:
                temp.append(nums[j])
                self.dfs(j + 1, nums, temp, results, n, visited)
                temp.pop()
            elif temp and temp[-1] <= nums[j]:
                temp.append(nums[j])
                copy_arr = temp.copy()
                t = tuple(copy_arr)
                if t not in visited:
                    visited.add(t)
                    results.append(copy_arr)
                    self.dfs(j + 1, nums, temp, results, n, visited)
                    temp.pop()
                else:
                    temp.pop()