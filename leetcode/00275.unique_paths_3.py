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
        m, n = len(grid), len(grid[0])
        graph, starting_point, ending_point = self.build_graph(grid, m, n)
        sr, sc = starting_point
        er, ec = ending_point
        result = [0]
        self.dfs(grid, sr, sc, m, n, graph, er, ec, result)
        return result[0]

    def dfs(self, grid, row, col, m, n, graph, er, ec, result):
        if row < 0 or row >= m or col < 0 or col >= n or grid[row][col] == -1:
            return

        if row == er and col == ec:
            if self.are_all_visited(graph):
                result[0] += 1
            return
        
        cache_cell = grid[row][col]
        grid[row][col] = -1
        graph[f"{row}-{col}"] = True

        self.dfs(grid, row+1, col, m, n, graph, er, ec, result)
        self.dfs(grid, row-1, col, m, n, graph, er, ec, result)
        self.dfs(grid, row, col+1, m, n, graph, er, ec, result)
        self.dfs(grid, row, col-1, m, n, graph, er, ec, result)

        grid[row][col] = cache_cell
        graph[f"{row}-{col}"] = False
        

    def are_all_visited(self, graph):
        return all(x == True for x in list(graph.values()))


    def build_graph(self, grid, m, n):
        graph = {}
        starting_point = [-1, -1]
        ending_point = [-1, -1]

        for row in range(m):
            for col in range(n):
                cell = grid[row][col]
                if cell == 1:
                    starting_point = [row, col]
                
                if cell == 2:
                    ending_point = [row, col]
                
                if cell == 0 or cell == 1:
                    graph[f"{row}-{col}"] = False
        
        return (graph, starting_point, ending_point)