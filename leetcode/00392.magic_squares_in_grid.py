"""
840. Magic Squares In Grid

A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, 
column, and both diagonals all have the same sum. Given a row x col grid of integers, how many 
3 x 3 contiguous magic square subgrids are there? Note: while a magic square can only contain 
numbers from 1 to 9, grid may contain numbers up to 15.

Example 1:
Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
Output: 1
Explanation: 
The following subgrid is a 3 x 3 magic square:
while this one is not In total, there is only one magic square inside the given grid.

Example 2:
Input: grid = [[8]]
Output: 0

Constraints:
    row == grid.length
    col == grid[i].length
    1 <= row, col <= 10
    0 <= grid[i][j] <= 15

https://leetcode.com/problems/magic-squares-in-grid/description/
"""
class Solution:
    def numMagicSquaresInside(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        magic_squares = 0
        for row in range(m - 2):
            for col in range(n - 2):
                is_valid = self.has_valid_integers(grid, row, row + 2, col, col + 2)
                if is_valid:
                    valid1, num1 = self.has_valid_row_sums(grid, row, row + 2, col, col + 2)
                    valid2, num2 = self.has_valid_col_sums(grid, row, row + 2, col, col + 2)
                    valid3, num3 = self.has_valid_diag_sums(grid, row, row + 2, col, col + 2)
                    if valid1 and valid2 and valid3 and num1 == num2 and num2 == num3:
                        magic_squares += 1
        return magic_squares

    def has_valid_integers(self, grid, sr, er, sc, ec):
        valid_nums = [1 for i in range(10)]
        for r in range(sr, er + 1):
            for c in range(sc, ec + 1):
                num = grid[r][c]
                if 0 < num < 10:
                    valid_nums[num] -= 1
                    if valid_nums[num] < 0: return False
                else:
                    return False
        return True
    
    def has_valid_row_sums(self, grid, sr, er, sc, ec):
        row_sum = float("inf")
        for r in range(sr, er + 1):
            curr_sum = grid[r][sc] + grid[r][sc+1] + grid[r][ec]
            if row_sum == float("inf"):
                row_sum = curr_sum
            else:
                if curr_sum != row_sum:
                    return (False, float("inf"))
        return (True, row_sum)

    def has_valid_col_sums(self, grid, sr, er, sc, ec):
        col_sum = float("inf")
        for c in range(sc, ec + 1):
            curr_sum = grid[sr][c] + grid[sr+1][c] + grid[er][c]
            if col_sum == float("inf"):
                col_sum = curr_sum
            else:
                if curr_sum != col_sum:
                    return (False, float("inf"))
        return (True, col_sum)

    def has_valid_diag_sums(self, grid, sr, er, sc, ec):
        left_right_sum = grid[sr][sc] + grid[sr+1][sc+1] + grid[er][ec]
        right_left_sum = grid[sr][ec] + grid[sr+1][ec-1] + grid[er][sc]
        return (left_right_sum == right_left_sum, left_right_sum)
