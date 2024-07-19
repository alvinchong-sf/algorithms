"""
1424. Diagonal Traverse II
Given a 2D integer array nums, return all elements of nums in diagonal order as shown in the below images.

Example 1:
Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,4,2,7,5,3,8,6,9]

Example 2:
Input: nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]
Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]

Constraints:
    1 <= nums.length <= 105
    1 <= nums[i].length <= 105
    1 <= sum(nums[i].length) <= 105
    1 <= nums[i][j] <= 105

https://leetcode.com/problems/diagonal-traverse-ii/description/
Time: O(n) | Space: O(n)
"""

class Solution:
    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:
        m = len(nums)
        hash_map = {}
        for r in range(m):
            n = len(nums[r])
            for c in range(n):
                if r + c in hash_map:
                    hash_map[r+c].append(nums[r][c])
                else:
                    hash_map[r+c] = [nums[r][c]]
        result = []
        values = list(hash_map.values())
        for subarr in values:
            n = len(subarr)
            for i in range(n - 1, -1, -1):
                result.append(subarr[i])
        return result