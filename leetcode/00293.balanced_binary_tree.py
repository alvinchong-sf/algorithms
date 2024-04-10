# 110. Balanced Binary Tree
# Given a binary tree, determine if it is height-balanced.

# Example 1:
# Input: root = [3,9,20,null,null,15,7]
# Output: true

# Example 2:
# Input: root = [1,2,2,3,3,null,null,4,4]
# Output: false

# Example 3:
# Input: root = []
# Output: true

# Constraints:
#     The number of nodes in the tree is in the range [0, 5000].
#     -104 <= Node.val <= 104

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root is None: return True
        if root.left is None and root.right is None: return True

        return self._is_balanced(root)[0]

    def _is_balanced(self, root):
        if root is None: return (True, 0)

        is_left_balanced, left = self._is_balanced(root.left)
        is_right_balanced, right = self._is_balanced(root.right)
        diff = abs(left - right)
        if diff > 1 or not is_left_balanced or not is_right_balanced:
            return (False, max(left, right) + 1)
        else:
            return (True, max(left, right) + 1)
        
# https://leetcode.com/problems/balanced-binary-tree/description/
# Time: O(n) | Space: O(h) - where h is height of tree