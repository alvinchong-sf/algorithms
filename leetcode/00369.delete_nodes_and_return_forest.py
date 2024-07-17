"""
1110. Delete Nodes And Return Forest
Given the root of a binary tree, each node in the tree has a distinct value. After deleting all 
nodes with a value in to_delete, we are left with a forest (a disjoint union of trees). Return 
the roots of the trees in the remaining forest. You may return the result in any order.

Example 1:
Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]

Example 2:
Input: root = [1,2,4,null,3], to_delete = [3]
Output: [[1,2,4]]

Constraints:
    The number of nodes in the given tree is at most 1000.
    Each node has a distinct value between 1 and 1000.
    to_delete.length <= 1000
    to_delete contains distinct values between 1 and 1000.

https://leetcode.com/problems/delete-nodes-and-return-forest/description/
Time: O(n) | Space: O(n)
"""
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def delNodes(self, root: Optional[TreeNode], to_delete: List[int]) -> List[TreeNode]:
        deletes = set(to_delete)
        results = [] if root.val in deletes else [root]
        self.dfs(root, results, deletes)
        return results
        
    def dfs(self, root, results, deletes):
        if root is None: return False
        to_remove = False
        left = self.dfs(root.left, results, deletes)
        right = self.dfs(root.right, results, deletes)
        if left: root.left = None
        if right: root.right = None
        if root.val in deletes:
            if root.left: results.append(root.left)
            if root.right: results.append(root.right)
            to_remove = True
        return to_remove
