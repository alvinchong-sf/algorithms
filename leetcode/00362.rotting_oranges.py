"""
994. Rotting Oranges
You are given an m x n grid where each cell can have one of three values:
    0 representing an empty cell,
    1 representing a fresh orange, or
    2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this 
is impossible, return -1.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 10
    grid[i][j] is 0, 1, or 2.

https://leetcode.com/problems/rotting-oranges/description/
Time: O(n) | Space: O(n)
"""
from collections import deque
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        directions = [(0,1),(0,-1),(1,0),(-1,0)]
        m, n = len(grid), len(grid[0])
        count = 0
        visited = set()
        queue = deque(self.find_rotten_oranges(grid, m, n, visited))
        while queue:
            size = len(queue)
            for _ in range(size):
                r, c = queue.popleft()
                for dx, dy in directions:
                    nr = dx + r
                    nc = dy + c
                    if 0 <= nr < m and 0 <= nc < n and (nr, nc) not in visited and grid[nr][nc] == 1:
                        queue.append((nr, nc))
                        grid[nr][nc] = 2
                        visited.add((nr, nc))
            count += 1
        return -1 if self.any_fresh_oranges(grid, m, n) else (0 if count == 0 else count - 1)

    def any_fresh_oranges(self, grid, m, n):
        for r in range(m):
            for c in range(n):
                if grid[r][c] == 1:
                    return True
        return False

    def find_rotten_oranges(self, grid, m, n, visited):
        result = []
        for r in range(m):
            for c in range(n):
                if grid[r][c] == 2:
                    result.append((r, c))
                    visited.add((r, c))
        return result