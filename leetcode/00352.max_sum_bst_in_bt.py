"""
1373. Maximum Sum BST in Binary Tree
Given a binary tree root, return the maximum sum of all keys of any sub-tree which is also a 
Binary Search Tree (BST). Assume a BST is defined as follows:
    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
Output: 20
Explanation: Maximum sum in a valid Binary search tree is obtained in root node with key equal to 3.

Example 2:
Input: root = [4,3,null,1,2]
Output: 2
Explanation: Maximum sum in a valid Binary search tree is obtained in a single root node with key equal to 2.

Example 3:
Input: root = [-4,-2,-5]
Output: 0
Explanation: All values are negatives. Return an empty BST.

Constraints:
    The number of nodes in the tree is in the range [1, 4 * 104].
    -4 * 104 <= Node.val <= 4 * 104

https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/description/
Time: O(n) | Space: O(n)
"""
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    max_sum = 0
    memo = { None: 0 }
    def maxSumBST(self, root: Optional[TreeNode]) -> int:
        self.get_sum(root)
        self.dfs(root)
        return self.max_sum

    def dfs(self, root):
        if root is None:
            return (True, float("inf"), float("-inf"))

        is_valid_left, left_min, left_max = self.dfs(root.left)
        is_valid_right, right_min, right_max = self.dfs(root.right)
        is_valid = is_valid_left and is_valid_right and left_max < root.val < right_min

        if is_valid:
            curr_sum = self.memo[root]
            self.max_sum = max(self.max_sum, curr_sum)
        
        curr_min = min(left_min, right_min, root.val)
        curr_max = max(left_max, right_max, root.val)
        return (is_valid, curr_min, curr_max)

    def get_sum(self, root) -> int:
        if root in self.memo: return self.memo[root]
        left = self.get_sum(root.left)
        right = self.get_sum(root.right)
        curr_sum = left + right + root.val
        self.memo[root] = curr_sum
        return curr_sum