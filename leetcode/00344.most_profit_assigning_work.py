"""
826. Most Profit Assigning Work
You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:
- difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
- worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with 
difficulty at most worker[j]).
Every worker can be assigned at most one job, but one job can be completed multiple times.
For example, if three workers attempt the same job that pays $1, then the total profit will 
be $3. If a worker cannot complete any job, their profit is $0.
Return the maximum profit we can achieve after assigning the workers to the jobs.


Example 1:
Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
Output: 100
Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.

Example 2:
Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
Output: 0

Constraints:
    n == difficulty.length
    n == profit.length
    m == worker.length
    1 <= n, m <= 104
    1 <= difficulty[i], profit[i], worker[i] <= 105
https://leetcode.com/problems/most-profit-assigning-work/

Heap Solution
Time: avg case O(n + mlog(m)) | worst case O(nlog(n) + mlog(m))
Space: O(n)
"""
class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        n = len(profit)
        worker.sort(reverse=True)
        max_ability = worker[0]
        max_heap = MaxHeap()
        max_profit = 0
        for i in range(n):
            curr_diff = difficulty[i]
            curr_prof = profit[i]
            if curr_diff <= max_ability:
                max_heap.add((curr_diff, curr_prof))
        for ability in worker:
            while max_heap.peek() and max_heap.peek()[0] > ability:
                max_heap.remove()
            if max_heap.peek() is None:
                break
            max_profit += max_heap.peek()[1]
        return max_profit

class MaxHeap:
    def __init__(self):
        self.heap = []
    def peek(self):
        n = len(self.heap)
        return None if n == 0 else self.heap[0]
    def add(self, values):
        self.heap.append(values)
        self.siftup(len(self.heap) - 1, self.heap)
    def remove(self):
        n = len(self.heap)
        if n == 0: return None
        if n == 1: return self.heap.pop()
        self.swap(self.heap, 0, n - 1)
        removed_values = self.heap.pop()
        self.siftdown(0, n - 1, self.heap)
        return removed_values
    def siftup(self, idx, arr):
        if idx == 0: return
        parent_idx = (idx - 1) // 2
        if arr[parent_idx][1] >= arr[idx][1]: return
        self.swap(arr, parent_idx, idx)
        self.siftup(parent_idx, arr)
    def siftdown(self, idx, size, arr):
        left_idx = (idx * 2) + 1
        right_idx = (idx * 2) + 2
        left_val = float("-inf") if left_idx >= size else arr[left_idx][1]
        right_val = float("-inf") if right_idx >= size else arr[right_idx][1]
        curr_val = arr[idx][1]
        if curr_val >= left_val and curr_val >= right_val: return
        swap_idx = left_idx if left_val >= right_val else right_idx
        self.swap(arr, swap_idx, idx)
        self.siftdown(swap_idx, size, arr)
    def swap(self, arr, i, j):
        arr[i], arr[j] = arr[j], arr[i]