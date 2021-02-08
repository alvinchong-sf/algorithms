// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path 
// from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    if(!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return 1 + Math.max(left, right);
};

// time o(n) traversing thru all nodes
// space o(n) recursive stack, but o(1) extra space 
// https://leetcode.com/problems/maximum-depth-of-binary-tree/