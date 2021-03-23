// 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var isValidBST = function(root) {
    // for left side, keep track of max
    // for right side, keep track of min
    // create a helper recrusive call
    
    return helper(root, -Infinity, Infinity);
};

const helper = (node, min, max) => {
    
    if(!node) return true;
    if(node.val >= max || node.val <= min) return false;
    
    let left = helper(node.left, min, node.val);
    let right = helper(node.right, node.val, max);
    
    return left && right;
}

// time o(n) where is the number of nodes
// space o(n) recursive stack
// https://leetcode.com/problems/validate-binary-search-tree/