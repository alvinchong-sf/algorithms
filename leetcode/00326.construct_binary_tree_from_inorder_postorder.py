"""
106. Construct Binary Tree from Inorder and Postorder Traversal
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary 
tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: inorder = [-1], postorder = [-1]
Output: [-1]

Constraints:
    1 <= inorder.length <= 3000
    postorder.length == inorder.length
    -3000 <= inorder[i], postorder[i] <= 3000
    inorder and postorder consist of unique values.
    Each value of postorder also appears in inorder.
    inorder is guaranteed to be the inorder traversal of the tree.
    postorder is guaranteed to be the postorder traversal of the tree.

https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description
"""
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if len(postorder) == 0: return None
        root_val = postorder[-1]
        node = TreeNode(root_val)
        partition_idx = -1
        for idx, num in enumerate(inorder):
            if num == root_val:
                partition_idx = idx
                break
        if partition_idx == -1: return None
        left_inorder = inorder[0:partition_idx]
        right_inorder = inorder[partition_idx+1:]

        left_set = set(left_inorder)

        left_postorder, right_postorder = [], []
        postorder.pop()
        for num in postorder:
            if num in left_set:
                left_postorder.append(num)
            else:
                right_postorder.append(num)

        node.left = self.buildTree(left_inorder, left_postorder)
        node.right = self.buildTree(right_inorder, right_postorder)

        return node