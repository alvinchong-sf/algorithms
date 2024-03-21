# 51. N-Queens
# The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two 
# queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. 
# You may return the answer in any order. Each solution contains a distinct board configuration of 
# the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

# Example 1:
# Input: n = 4
# Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
# Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

# Example 2:
# Input: n = 1
# Output: [["Q"]]

# Constraints:1 <= n <= 9

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        col_set, pos_diagonal_set, neg_diagonal_set = set(), set(), set()
        all_set = (col_set, pos_diagonal_set, neg_diagonal_set)
        result = []
        board = [["." for y in range(n)] for x in range(n)]
        self.dfs(board, 0, n, all_set, result)
        return result

    def dfs(self, board, row, n, all_set, result):
        col_set, pos_diagonal_set, neg_diagonal_set = all_set
        if row >= n:
            format_result = ["".join(row) for row in board]
            result.append(format_result)
            return

        for col in range(n):
            if not(col in col_set or row + col in pos_diagonal_set or row - col in neg_diagonal_set):
                board[row][col] = "Q"
                col_set.add(col)
                pos_diagonal_set.add(row + col)
                neg_diagonal_set.add(row - col)

                self.dfs(board, row + 1, n, all_set, result)

                board[row][col] = "."
                col_set.remove(col)
                pos_diagonal_set.remove(row + col)
                neg_diagonal_set.remove(row - col)