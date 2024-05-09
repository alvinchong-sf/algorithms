"""
3075. Maximize Happiness of Selected Children
You are given an array happiness of length n, and a positive integer k. There are n children standing in a queue, 
where the ith child has happiness value happiness[i]. You want to select k children from these n children in k turns.
In each turn, when you select a child, the happiness value of all the children that have not been selected till now 
decreases by 1. Note that the happiness value cannot become negative and gets decremented only if it is positive.
Return the maximum sum of the happiness values of the selected children you can achieve by selecting k children.

Example 1:
Input: happiness = [1,2,3], k = 2
Output: 4
Explanation: We can pick 2 children in the following way:
- Pick the child with the happiness value == 3. The happiness value of the remaining children becomes [0,1].
- Pick the child with the happiness value == 1. The happiness value of the remaining child becomes [0]. Note that the happiness value cannot become less than 0.
The sum of the happiness values of the selected children is 3 + 1 = 4.

Example 2:
Input: happiness = [1,1,1,1], k = 2
Output: 1
Explanation: We can pick 2 children in the following way:
- Pick any child with the happiness value == 1. The happiness value of the remaining children becomes [0,0,0].
- Pick the child with the happiness value == 0. The happiness value of the remaining child becomes [0,0].
The sum of the happiness values of the selected children is 1 + 0 = 1.

Example 3:
Input: happiness = [2,3,4,5], k = 1
Output: 5
Explanation: We can pick 1 child in the following way:
- Pick the child with the happiness value == 5. The happiness value of the remaining children becomes [1,2,3].
The sum of the happiness values of the selected children is 5.

Constraints:
    1 <= n == happiness.length <= 2 * 105
    1 <= happiness[i] <= 108
    1 <= k <= n
https://leetcode.com/problems/maximize-happiness-of-selected-children/description
"""

# Time: O(n + klog(n)) | Space: O(n)
class Solution:
    def maximumHappinessSum(self, happiness: List[int], k: int) -> int:
        n = len(happiness)
        if n == 1: return happiness[0]
        max_heap = MaxHeap(happiness)
        result, sad_counter = 0, 0

        while k > 0:
            removed_num = max_heap.remove()
            happiness_num = removed_num - sad_counter
            if happiness_num > 0:
                result += happiness_num
            k -= 1
            sad_counter += 1
        
        return result

class MaxHeap:
    def __init__(self, nums):
        self.heap = self.build_heap(nums)
    
    def build_heap(self, nums):
        n = len(nums)
        for i in range(n - 1, -1, -1):
            self.siftdown(i, n, nums)

        return nums
    
    def remove(self):
        n = len(self.heap)
        if n == 0: return None
        if n == 1: return self.heap.pop()

        self.swap(0, n - 1, self.heap)
        removed_num = self.heap.pop()
        self.siftdown(0, n - 1, self.heap)
        return removed_num
    
    def siftdown(self, idx, size, nums):
        left_idx = (idx * 2) + 1
        right_idx = (idx * 2) + 2
        left_val = float("-inf") if left_idx >= size else nums[left_idx]
        right_val = float("-inf") if right_idx >= size else nums[right_idx]
        curr_val = nums[idx]

        if curr_val >= left_val and curr_val >= right_val: return

        swap_idx = left_idx if left_val >= right_val else right_idx
        self.swap(idx, swap_idx, nums)
        self.siftdown(swap_idx, size, nums)
    
    def swap(self, i, j, nums):
        nums[i], nums[j] = nums[j], nums[i]
