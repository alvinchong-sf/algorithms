// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

var invertTree = function(root) {
    
    if(!root) return null;
    if(!root.left && !root.right) return root;
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    if(root.left) invertTree(root.left);
    if(root.right) invertTree(root.right);
    return root;
};

// time o(n)
// space o(1)

// https://leetcode.com/problems/invert-binary-tree/