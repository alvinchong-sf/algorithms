"""
652. Find Duplicate Subtrees
Given the root of a binary tree, return all duplicate subtrees.
For each kind of duplicate subtrees, you only need to return the root node of any one of them.
Two trees are duplicate if they have the same structure with the same node values.

Example 1:
Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]

Example 2:
Input: root = [2,1,1]
Output: [[1]]

Example 3:
Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]

Constraints:
    The number of the nodes in the tree will be in the range [1, 5000]
    -200 <= Node.val <= 200

https://leetcode.com/problems/find-duplicate-subtrees
Time: O(n^3) | Space: O(n)
"""
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        duplicates = []
        self.dfs(root, duplicates)
        return self.find_duplicates_in_duplicates(duplicates)

    def find_duplicates_in_duplicates(self, duplicates):
        n = len(duplicates)
        ref = [True for _ in range(n)]
        for i in range(n):
            for j in range(i + 1, n):
                tree1, tree2 = duplicates[i], duplicates[j]
                if self.is_same_tree(tree1, tree2):
                    ref[j] = False
        no_dupes = []
        for k in range(n):
            if ref[k]:
                no_dupes.append(duplicates[k])
        return no_dupes

    def dfs(self, root, duplicates):
        if root is None: return []
        left = self.dfs(root.left, duplicates)
        right = self.dfs(root.right, duplicates)
        result = []
        removed = set()
        for tree1 in left:
            for tree2 in right:
                if self.is_same_tree(tree1, tree2) and (tree1 not in removed and tree2 not in removed):
                    duplicates.append(tree1)
                    removed.add(tree1)
                    removed.add(tree2)
        for tree in left + right:
            if tree not in removed:
                result.append(tree)
        result.append(root)
        return result

    def is_same_tree(self, tree1, tree2):
        if tree1 is None and tree2 is None: return True
        if tree1 is None or tree2 is None: return False
        if tree1.val != tree2.val: return False
        left = self.is_same_tree(tree1.left, tree2.left)
        right = self.is_same_tree(tree1.right, tree2.right)
        return left and right