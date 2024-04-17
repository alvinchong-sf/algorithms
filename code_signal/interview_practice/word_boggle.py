"""
Boggle is a popular word game in which players attempt to find words in sequences of adjacent letters on a rectangular board.

Given a two-dimensional array board that represents the character cells of the Boggle board and an array of unique strings words, find all the possible words from words that can be formed on the board.

Note that in Boggle when you're finding a word, you can move from a cell to any of its 8 neighbors, but you can't use the same cell twice in one word.

Example
For
board = [
    ['R', 'L', 'D'],
    ['U', 'O', 'E'],
    ['C', 'S', 'O']
]
and words = ["CODE", "SOLO", "RULES", "COOL"], the output should be
solution(board, words) = ["CODE", "RULES"].

Example
Input/Output
[input] array.array.char board

A two-dimensional array of uppercase English characters representing a rectangular Boggle board.

Guaranteed constraints:
2 ≤ board.length ≤ 4,
2 ≤ board[i].length ≤ 4,
'A' ≤ board[i][j] ≤ 'Z'.

[input] array.string words

An array of unique English words composed only of uppercase English characters.

Guaranteed constraints:
0 ≤ words.length ≤ 100,
2 ≤ words[i].length ≤ 16,
'A' ≤ words[i][j] ≤ 'Z'.

[output] array.string

Words from words that can be found on the Boggle board without duplicates and sorted lexicographically in ascending order.
"""

def solution(board, words):
    result = []
    m, n = len(board), len(board[0])
    directions = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]
    for word in words:
        search_board(board, m, n, result, directions, word)
    return sorted(result)
    
def search_board(board, m, n, result, directions, word):
    for r in range(m):
        for c in range(n):
            if board[r][c] == word[0]:
                has_found = dfs(board, r, c, m, n, word, 0, directions)
                if has_found:
                    result.append(word)
                    return True
    return False
    
    
def dfs(board, row, col, m, n, word, idx, directions):
    if row < 0 or col < 0 or row >= m or col >= n or idx >= len(word):
        return False
    
    if word[idx] != board[row][col] or board[row][col] == "_":
        return False
        
    if idx == len(word) - 1:
        return True
    
    cache = board[row][col]    
    board[row][col] = "_"
    
    for dx, dy in directions:
        word_found = dfs(board, row + dx, col + dy, m, n, word, idx + 1, directions)
        if word_found:
            board[row][col] = cache
            return True        
    
    board[row][col] = cache
    return False
    
