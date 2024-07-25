"""
912. Sort an Array
Given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity 
and with the smallest space complexity possible.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

Constraints:
    1 <= nums.length <= 5 * 104
    -5 * 104 <= nums[i] <= 5 * 104

https://leetcode.com/problems/sort-an-array/description/
Time: O(n log(n)) | Space: O(log(n))
"""
import random
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        random_val = random.randint(0, 1)
        if random_val == 0:
            return HeapSort(nums).heapsort
        else:
            return MergeSort(nums).mergesort

class MergeSort:
    def __init__(self, nums):
        self.mergesort = self.merge_sort(nums, 0, len(nums) - 1)

    def merge_sort(self, nums, left, right):
        if left >= right:
            if left == right:
                return [nums[left]]
            return []
        mid = ((right - left) // 2) + left
        left = self.merge_sort(nums, left, mid)
        right = self.merge_sort(nums, mid + 1, right)
        return self.merge(left, right)
    
    def merge(self, nums1, nums2):
        merged = []
        n1, n2 = len(nums1), len(nums2)
        i, j = 0, 0
        while i < n1 and j < n2:
            if nums1[i] <= nums2[j]:
                merged.append(nums1[i])
                i += 1
            else:
                merged.append(nums2[j])
                j += 1
        while i < n1:
            merged.append(nums1[i])
            i += 1
        while j < n2:
            merged.append(nums2[j])
            j += 1
        return merged

class HeapSort:
    def __init__(self, nums):
        self.heapsort = self.build_heap(nums)

    def build_heap(self, nums):
        n = len(nums)
        for i in range(n - 1, -1, -1):
            self.siftdown(i, n, nums)
        for j in range(n - 1, -1, -1):
            self.swap(0, j, nums)
            self.siftdown(0, j, nums)
        return nums

    def siftdown(self, i, n, nums):
        left_i = (i * 2) + 1
        right_i = (i * 2) + 2
        left_val = float("-inf") if left_i >= n else nums[left_i]
        right_val = float("-inf") if right_i >= n else nums[right_i]
        curr_val = nums[i]

        if curr_val >= left_val and curr_val >= right_val: return
        swap_i = left_i if left_val > right_val else right_i
        self.swap(swap_i, i, nums)
        self.siftdown(swap_i, n, nums)

    def swap(self, i, j, nums):
        nums[i], nums[j] = nums[j], nums[i]