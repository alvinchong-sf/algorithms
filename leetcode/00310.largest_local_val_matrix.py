"""
2373. Largest Local Values in a Matrix
You are given an n x n integer matrix grid.
Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row 
i + 1 and column j + 1. In other words, we want to find the largest value in every 
contiguous 3 x 3 matrix in grid. Return the generated matrix.

Example 1:
Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
Output: [[9,9],[8,6]]
Explanation: The diagram above shows the original matrix and the generated matrix.
Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

Example 2:
Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
Output: [[2,2,2],[2,2,2],[2,2,2]]
Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.

Constraints:
    n == grid.length == grid[i].length
    3 <= n <= 100
    1 <= grid[i][j] <= 100
"""
# https://leetcode.com/problems/largest-local-values-in-a-matrix/description/
# Time: O(n^2) | Space: O(n^2)
class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        n = len(grid)
        limit = n - 3
        max_local = [[0 for y in range(n - 2)] for x in range(n - 2)]
        flatten = []
        i = 0
        for row in range(limit + 1):
            for col in range(limit + 1):
                val = self.find_largest(grid, row, row + 2, col, col + 2)
                flatten.append(val)
        
        for r in range(len(max_local)):
            for c in range(len(max_local)):
                max_local[r][c] = flatten[i]
                i += 1
        
        return max_local

    def find_largest(self, grid, sr, er, sc, ec):
        largest = 0
        for r in range(sr, er + 1):
            for c in range(sc, ec + 1):
                largest = max(largest, grid[r][c])

        return largest
