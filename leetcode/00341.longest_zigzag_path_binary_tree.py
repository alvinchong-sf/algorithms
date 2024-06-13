"""
1372. Longest ZigZag Path in a Binary Tree
You are given the root of a binary tree.
A ZigZag path for a binary tree is defined as follow:
    Choose any node in the binary tree and a direction (right or left).
    If the current direction is right, move to the right child of the current node; otherwise, 
    move to the left child. Change the direction from right to left or from left to right.
    Repeat the second and third steps until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).
Return the longest ZigZag path contained in that tree.

Example 1:
Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

Example 2:
Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).

Example 3:
Input: root = [1]
Output: 0

Constraints:
    The number of nodes in the tree is in the range [1, 5 * 104].
    1 <= Node.val <= 100

https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description

"""
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    max_count = 0
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        if root.left is None and root.right is None:
            return self.max_count
        self.dfs(root.left, "left")
        self.dfs(root.right, "right")
        return self.max_count
        
    def dfs(self, root, direction):
        if root is None: return 0
        left = self.dfs(root.left, "left")
        right = self.dfs(root.right, "right")
        curr_count = right + 1 if direction == "left" else left + 1
        self.max_count = max(self.max_count, curr_count)
        return curr_count