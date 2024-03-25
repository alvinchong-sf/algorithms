# 980. Unique Paths III
# You are given an m x n integer array grid where grid[i][j] could be:

# 1 representing the starting square. There is exactly one starting square.
# 2 representing the ending square. There is exactly one ending square.
# 0 representing empty squares we can walk over.
# -1 representing obstacles that we cannot walk over.

# Return the number of 4-directional walks from the starting square to the ending square,
# that walk over every non-obstacle square exactly once.

# Example 1:
# Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
# Output: 2
# Explanation: We have the following two paths: 
# 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
# 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

# Example 2:
# Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
# Output: 4
# Explanation: We have the following four paths: 
# 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
# 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
# 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
# 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

# Example 3:
# Input: grid = [[0,1],[2,0]]
# Output: 0
# Explanation: There is no path that walks over every empty square exactly once.
# Note that the starting and ending square can be anywhere in the grid.

# Constraints:
# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 20
# 1 <= m * n <= 20
# -1 <= grid[i][j] <= 2
# There is exactly one starting cell and one ending cell.
class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        m, n =  len(grid), len(grid[0])
        hash_map, start, end = self.build_hash_map(grid, m, n)
        sr, sc = start
        er, ec = end
        total = [0]
        self.dfs(grid, sr, sc, m, n, hash_map, er, ec, total)
        return total[0]

    def dfs(self, grid, row, col, m, n, hash_map, er, ec, total):
        if row < 0 or col < 0 or row >= m or col >= n or grid[row][col] == -1:
            return

        hash_map[f"{row}-{col}"] = True
        if row == er and col == ec:
            if self.all_true(hash_map):
                total[0] += 1
            hash_map[f"{row}-{col}"] = False
            return

        temp = grid[row][col]
        grid[row][col] = -1

        self.dfs(grid, row+1, col, m, n, hash_map, er, ec, total)
        self.dfs(grid, row-1, col, m, n, hash_map, er, ec, total)
        self.dfs(grid, row, col+1, m, n, hash_map, er, ec, total)
        self.dfs(grid, row, col-1, m, n, hash_map, er, ec, total)

        grid[row][col] = temp
        hash_map[f"{row}-{col}"] = False
        return

    def all_true(self, hash_map):
        return all(hash_map.values())

    def build_hash_map(self, grid, m, n):
        hash_map = {}
        start, end = [-1, -1], [-1, -1]
        for row in range(m):
            for col in range(n):
                cell = grid[row][col]
                if cell == -1:
                    continue

                if cell == 1:
                    start[0] = row
                    start[1] = col
                
                if cell == 2:
                    end[0] = row
                    end[1] = col

                hash_map[f"{row}-{col}"] = False
        
        return (hash_map, start, end)