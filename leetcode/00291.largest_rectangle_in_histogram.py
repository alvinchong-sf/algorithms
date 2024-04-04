# 84. Largest Rectangle in Histogram
# Given an array of integers heights representing the histogram's bar height where the width of 
# each bar is 1, return the area of the largest rectangle in the histogram.

# Example 1:
# Input: heights = [2,1,5,6,2,3]
# Output: 10
# Explanation: The above is a histogram where width of each bar is 1.
# The largest rectangle is shown in the red area, which has an area = 10 units.

# Example 2:
# Input: heights = [2,4]
# Output: 4

# Constraints:
# 1 <= heights.length <= 105
# 0 <= heights[i] <= 104

class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        left_stack = []
        right_stack = []
        left_indices = [-1] * n
        right_indices = [n] * n
        max_area = 0

        for i in range(n):
            while left_stack and heights[i] <= left_stack[-1][1]:
                left_stack.pop()
            left_indices[i] = left_stack[-1][0] if left_stack else -1
            left_stack.append((i, heights[i]))
        
        for j in range(n-1, -1, -1):
            while right_stack and heights[j] <= right_stack[-1][1]:
                right_stack.pop()
            right_indices[j] = right_stack[-1][0] if right_stack else n
            right_stack.append((j, heights[j]))
        
        for k in range(n):
            curr_area = heights[k] * (right_indices[k] - left_indices[k] - 1)
            max_area = max(max_area, curr_area)
        
        return max_area