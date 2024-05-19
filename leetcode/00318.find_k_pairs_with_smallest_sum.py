"""
373. Find K Pairs with Smallest Sums
You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.
Define a pair (u, v) which consists of one element from the first array and one element from 
the second array. Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

Example 1:
Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: 
[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

Example 2:
Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: 
[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

Constraints:
    1 <= nums1.length, nums2.length <= 105
    -109 <= nums1[i], nums2[i] <= 109
    nums1 and nums2 both are sorted in non-decreasing order.
    1 <= k <= 104
    k <= nums1.length * nums2.length

https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description
Time: O(k * log(mn)) | Space: O(k)
"""

class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        n1, n2 = len(nums1), len(nums2)
        result = []
        visited = set((0, 0))
        minheap = MinHeap()
        minheap.add((nums1[0] + nums2[0], 0, 0)) 

        while k > 0 and minheap.size() > 0:
            n = minheap.size() 
            for _ in range(n):
                idx1, idx2 = minheap.remove()
                num1, num2 = nums1[idx1], nums2[idx2]
                result.append([num1, num2])
                k -= 1
                if k <= 0: break
                if idx1 + 1 < n1 and (idx1 + 1, idx2) not in visited:
                    minheap.add((nums1[idx1 + 1] + nums2[idx2], idx1 + 1, idx2))
                    visited.add((idx1 + 1, idx2))
                if idx2 + 1 < n2 and (idx1, idx2 + 1) not in visited:
                    minheap.add((nums1[idx1] + nums2[idx2 + 1], idx1, idx2 + 1))
                    visited.add((idx1, idx2 + 1))
        return result

class MinHeap:
    def __init__(self):
        self._heap = []

    def add(self, args):
        self._heap.append(args)
        self._siftup(len(self._heap) - 1, self._heap)

    def remove(self):
        n = len(self._heap)
        if n == 0: return None
        self._swap(self._heap, 0, n - 1)
        total, idx1, idx2 = self._heap.pop()
        if n == 1: return (idx1, idx2)
        self._siftdown(0, n - 1, self._heap)
        return (idx1, idx2)
    
    def size(self):
        return len(self._heap)
    
    def _siftup(self, idx, arr):
        if idx == 0: return
        parent_idx = (idx - 1) // 2
        parent_val = arr[parent_idx][0]
        curr_val = arr[idx][0]

        if parent_val <= curr_val: return
        self._swap(arr, idx, parent_idx)
        self._siftup(parent_idx, arr)

    def _siftdown(self, idx, size, arr):
        left_idx = (idx * 2) + 1
        right_idx = (idx * 2) + 2
        left_val = float("inf") if left_idx >= size else arr[left_idx][0]
        right_val = float("inf") if right_idx >= size else arr[right_idx][0]
        curr_val = arr[idx][0]

        if curr_val <= left_val and curr_val <= right_val: return
        swap_idx = left_idx if left_val <= right_val else right_idx
        self._swap(arr, swap_idx, idx)
        self._siftdown(swap_idx, size, arr)
    
    def _swap(self, arr, i, j):
        arr[i], arr[j] = arr[j], arr[i]