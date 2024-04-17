"""
In chess, queens can move any number of squares vertically, horizontally, or diagonally. The n-queens puzzle is the problem of placing n queens on an n × n chessboard so that no two queens can attack each other.

Given an integer n, print all possible distinct solutions to the n-queens puzzle. Each solution contains distinct board configurations of the placement of the n queens, where the solutions are arrays that contain permutations of [1, 2, 3, .. n]. The number in the ith position of the results array indicates that the ith column queen is placed in the row with that number. In your solution, the board configurations should be returned in lexicographical order.

Example
For n = 1, the output should be
solution(n) = [[1]];

For n = 4, the output should be
  solution(n) = [[2, 4, 1, 3],
                 [3, 1, 4, 2]]
This diagram of the second permutation, [3, 1, 4, 2], will help you visualize its configuration:

The element in the 1st position of the array, 3, indicates that the queen for column 1 is placed in row 3. Since the element in the 2nd position of the array is 1, the queen for column 2 is placed in row 1. The element in the 3rd position of the array is 4, meaning that the queen for column 3 is placed in row 4, and the element in the 4th position of the array is 2, meaning that the queen for column 4 is placed in row 2.

Input/Output
[input] integer n

The size of the board.

Guaranteed constraints:
1 ≤ n ≤ 10.

[output] array.array.integer

All possible distinct board configurations of the placement of the n queens, ordered lexicographically.
"""

def solution(n):
    result = []
    board = [-1 for _ in range(n)]
    all_sets = [set(), set(), set(), set()] # row, col, pos-diag, neg-diag
    dfs(result, board, n, all_sets, 0)
    return result
    
def dfs(result, board, n, all_sets, row):
    if row >= n:
        result.append(board.copy())
        return
    
    for col in range(n):
        # is pos valid?
        if not is_pos_valid(row, col, all_sets, n):
            continue
        
        # add queen in board and sets
        update_board(row, col, board, all_sets, "add")
        
        # recursive call
        dfs(result, board, n, all_sets, row + 1)
        
        # remove queen in board and sets
        update_board(row, col, board, all_sets, "remove")
        
def update_board(row, col, board, all_sets, operator):
    row_set, col_set, pos_set, neg_set = all_sets
    if operator == "add":
        board[row] = col + 1
        row_set.add(row)
        col_set.add(col)
        pos_set.add(row+col)
        neg_set.add(row-col)
        
    if operator == "remove":
        board[row] = -1
        row_set.remove(row)
        col_set.remove(col)
        pos_set.remove(row+col)
        neg_set.remove(row-col)
    
def is_pos_valid(row, col, all_sets, n):
    if row < 0 or col < 0 or row >= n or col >= n:
        return False

    row_set, col_set, pos_set, neg_set = all_sets
    
    if row in row_set:
        return False
        
    if col in col_set:
        return False
        
    if row+col in pos_set:
        return False
        
    if row-col in neg_set:
        return False
        
    return True

