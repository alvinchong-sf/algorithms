"""
1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
Given an array of integers nums and an integer limit, return the size of the longest non-empty 
subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

Example 1:
Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.

Example 2:
Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.

Example 3:
Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3

https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/
Time: O(n) | Space: O(n)
"""

# monotonic queue solution
from collections import deque
class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        decreasing, increasing = deque([]), deque([])
        j, max_length = 0, 1
        for i, num in enumerate(nums):
            while decreasing and num > decreasing[-1]:
                decreasing.pop()
            while increasing and num < increasing[-1]:
                increasing.pop()
            decreasing.append(num)
            increasing.append(num)
            while abs(decreasing[0] - increasing[0]) > limit:
                if decreasing[0] == nums[j]:
                    decreasing.popleft()
                if increasing[0] == nums[j]:
                    increasing.popleft()
                j += 1
            max_length = max(max_length, i - j + 1)
        return max_length