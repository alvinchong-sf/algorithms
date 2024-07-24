"""
3132. Find the Integer Added to Array II
You are given two integer arrays nums1 and nums2.
From nums1 two elements have been removed, and all other elements have been increased (or 
decreased in the case of negative) by an integer, represented by the variable x. As a result, 
nums1 becomes equal to nums2. Two arrays are considered equal when they contain  the same integers 
with the same frequencies. Return the minimum possible integer x that achieves this equivalence.

Example 1:
Input: nums1 = [4,20,16,12,8], nums2 = [14,18,10]
Output: -2
Explanation:
After removing elements at indices [0,4] and adding -2, nums1 becomes [18,14,10].

Example 2:
Input: nums1 = [3,5,5,3], nums2 = [7,7]
Output: 2
Explanation:
After removing elements at indices [0,3] and adding 2, nums1 becomes [7,7].

Constraints:
    3 <= nums1.length <= 200
    nums2.length == nums1.length - 2
    0 <= nums1[i], nums2[i] <= 1000
    The test cases are generated in a way that there is an integer x such that nums1 can become equal to nums2 by removing two elements and adding x to each element of nums1.

https://leetcode.com/problems/find-the-integer-added-to-array-ii/description/
Time: O(n^2 * m) | Space: O(n + m)
"""
from collections import Counter
class Solution:
    def minimumAddedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums1)
        min_diff = 1000
        for i in range(n - 1):
            for j in range(i + 1, n):
                left = nums1[:i]
                mid = nums1[i+1:j]
                right = nums1[j+1:]
                arr = left + mid + right
                curr_diff = self.compute_min(arr, nums2)
                min_diff = min(min_diff, curr_diff)
        min_diff = min(min_diff, curr_diff)
        return min_diff
    
    def compute_min(self, arr1, arr2):
        min_diff = float("inf")
        min1, max1 = min(arr1), max(arr1)
        min2, max2 = min(arr2), max(arr2)
        diffs = set()
        for a in [min1, max1]:
            for b in [min2, max2]:
                diffs.add(a - b)
                diffs.add(b - a)
        diffs = list(diffs)
        diffs.sort()
        for diff in diffs:
            counter = Counter(arr2)
            is_valid = True
            for num in arr1:
                if num + diff not in counter:
                    is_valid = False
                    break
                else:
                    counter[num + diff] -= 1
                    if counter[num + diff] <= 0:
                        del counter[num + diff]
            if is_valid:
                return diff
        return min_diff
        