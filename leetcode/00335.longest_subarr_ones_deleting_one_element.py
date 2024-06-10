"""
1493. Longest Subarray of 1's After Deleting One Element
Given a binary array nums, you should delete one element from it. Return the size of the longest 
non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Example 1:
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with 
value of 1's is [1,1,1,1,1].

Example 3:
Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

Constraints:
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.

https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description
Time: O(n) | Space: O(n)
"""

class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1: return 0

        all_ones = all(num == 1 for num in nums)
        if all_ones: return n - 1

        all_zeroes = all(nums == 0 for num in nums)
        if all_zeroes: return 0
        
        left = [None for _ in range(n)]
        right = [None for _ in range(n)]

        left_count = right_count = 0
        for i in range(n):
            j = n - i - 1
            if nums[i] == 0:
                left[i] = left_count
                left_count = 0

            if nums[i] != 0:
                left_count += 1
                left[i] = left_count
            
            if nums[j] == 0:
                right[j] = right_count
                right_count = 0

            if nums[j] != 0:
                right_count += 1
                right[j] = right_count
        
        longest = 0
        for k in range(n):
            if nums[k] == 0:
                longest = max(longest, left[k] + right[k])
        return longest