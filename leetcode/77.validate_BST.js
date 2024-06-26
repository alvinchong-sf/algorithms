// 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Time: O(n) | Space: O(n)
// https://leetcode.com/problems/validate-binary-search-tree/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// JS solution for pre order traversal
var isValidBST = function(root, min=-Infinity, max=Infinity) {
    if(!root) return true;
    if(root.val >= max || root.val <= min) return false;
    let left = helper(root.left, min, root.val);
    let right = helper(root.right, root.val, max);
    return left && right;
};

/**
 * Python Solution for post order traversal
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.is_valid(root)[0]
        
    def is_valid(self, root):
        if root is None: return (True, float("inf"), float("-inf"))
        left_valid, left_min, left_max = self.is_valid(root.left)
        right_valid, right_min, right_max = self.is_valid(root.right)
        valid = left_valid and right_valid and left_max < root.val < right_min
        curr_min = min(left_min, right_min, root.val)
        curr_max = max(left_max, right_max, root.val)
        return (valid, curr_min, curr_max)
 */