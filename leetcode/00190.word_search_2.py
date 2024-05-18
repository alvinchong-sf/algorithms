# 212. Word Search II
# Given an m x n board of characters and a list of strings words, return all words on the board.
# Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells 
# are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

# Example 1:
# Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
# Output: ["eat","oath"]

# Example 2:
# Input: board = [["a","b"],["c","d"]], words = ["abcb"]
# Output: []

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_terminal = False

class Trie:
    def __init__(self):
        self.trie = TrieNode()

    def add(self, words):
        for word in words:
            node = self.trie
            for char in word:
                if char not in node.children:
                    node.children[char] = TrieNode()
                node = node.children[char]
            node.is_terminal = True

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        m, n, w = len(board), len(board[0]), len(words)
        node = Trie()
        node.add(words)
        result = []

        for r in range(m):
            for c in range(n):
                self.dfs(node.trie, r, c, "", result, board, w, m, n)

        return result

    
    def dfs(self, node, r, c, prefix, result, board, w, m, n):
        if node.isTerminal and prefix not in result: 
            result.append(prefix)
        if r < 0 or r >= m or c < 0 or c >= n or len(result) == w: return 

        char = board[r][c]
        if char not in node.children: return
        board[r][c] = '.'
        node = node.children[char]

        self.dfs(node, r + 1, c, prefix + char, result, board, w, m, n)
        self.dfs(node, r - 1, c, prefix + char, result, board, w, m, n)
        self.dfs(node, r, c + 1, prefix + char, result, board, w, m, n)
        self.dfs(node, r, c - 1, prefix + char, result, board, w, m, n)

        board[r][c] = char