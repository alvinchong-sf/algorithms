"""
502. IPO
Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture 
Capital, LeetCode would like to work on some projects to increase its capital before the IPO. 
Since it has limited resources, it can only finish at most k distinct projects before the IPO. 
Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.
You are given n projects where the ith project has a pure profit profits[i] and a minimum 
capital of capital[i] is needed to start it. Initially, you have w capital. When you finish a 
project, you will obtain its pure profit and the profit will be added to your total capital.
Pick a list of at most k distinct projects from given projects to maximize your final capital, 
and return the final maximized capital.

Example 1:
Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
Output: 4
Explanation: Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

Example 2:
Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
Output: 6

Constraints:
    1 <= k <= 105
    0 <= w <= 109
    n == profits.length
    n == capital.length
    1 <= n <= 105
    0 <= profits[i] <= 104
    0 <= capital[i] <= 109

https://leetcode.com/problems/ipo/description/
Avg Time: O(k log(n)) 
Worst Time: O(k * n)
Space: O(n)
"""

class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        n = len(profits)
        min_max_heap = MinMaxHeap()
        for i in range(n):
            profit = profits[i]
            cap = capital[i]
            min_max_heap.add((cap, profit), "min")
        for _ in range(k):
            while min_max_heap.peek("min") and min_max_heap.peek("min")[0] <= w:
                c, p = min_max_heap.remove("min")
                min_max_heap.add((c, p), "max")
            
            if min_max_heap.peek("max"):
                max_profit = min_max_heap.remove("max")[1]
                w += max_profit
            else:
                return w
        return w

class MinMaxHeap:
    def __init__(self):
        # (capital, profits)[]
        self.min_heap = [] # keep track of min capital
        self.max_heap = [] # keep track of max profits

    def peek(self, heap_type):
        if heap_type == "min":
            n = len(self.min_heap)
            arr = self.min_heap
        else:
            n = len(self.max_heap)
            arr = self.max_heap
        return None if n == 0 else arr[0]

    def add(self, values, heap_type):
        if heap_type == "min":
            n = len(self.min_heap)
            arr = self.min_heap
        else:
            n = len(self.max_heap)
            arr = self.max_heap
        arr.append(values)
        self.siftup(n, arr, heap_type)

    def remove(self, heap_type):
        if heap_type == "min":
            n = len(self.min_heap)
            arr = self.min_heap
        else:
            n = len(self.max_heap)
            arr = self.max_heap
        if n == 0: return None
        if n == 1: return arr.pop()

        self.swap(arr, 0, n - 1)
        removed_values = arr.pop()
        self.siftdown(0, n - 1, arr, heap_type)
        return removed_values

    def siftup(self, idx, arr, heap_type):
        if idx == 0: return
        parent_idx = (idx - 1) // 2

        if heap_type == "min":
            parent_val = arr[parent_idx][0]
            curr_val = arr[idx][0]
        else:
            parent_val = arr[parent_idx][1]
            curr_val = arr[idx][1]

        if heap_type == "min" and parent_val <= curr_val: return
        if heap_type == "max" and parent_val >= curr_val: return
        self.swap(arr, parent_idx, idx)
        self.siftup(parent_idx, arr, heap_type)

    def siftdown(self, idx, size, arr, heap_type):
        left_idx = (idx * 2) + 1
        right_idx = (idx * 2) + 2
        if heap_type == "min":
            left_val = float("inf") if left_idx >= size else arr[left_idx][0]
            right_val = float("inf") if right_idx >= size else arr[right_idx][0]
            curr_val = arr[idx][0]
        else:
            left_val = float("-inf") if left_idx >= size else arr[left_idx][1]
            right_val = float("-inf") if right_idx >= size else arr[right_idx][1]
            curr_val = arr[idx][1]

        if heap_type == "min" and curr_val <= left_val and curr_val <= right_val: return
        if heap_type == "max" and curr_val >= left_val and curr_val >= right_val: return
        
        if heap_type == "min":
            swap_idx = left_idx if left_val <= right_val else right_idx
        else:
            swap_idx = left_idx if left_val >= right_val else right_idx

        self.swap(arr, swap_idx, idx)
        self.siftdown(swap_idx, size, arr, heap_type)

    def swap(self, arr, i, j):
        arr[i], arr[j] = arr[j], arr[i]