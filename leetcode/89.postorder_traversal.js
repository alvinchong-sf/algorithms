// 145. Binary Tree Postorder Traversal
// Given the root of a binary tree, return the postorder traversal of its nodes' values.

var postorderTraversal = function(root, arr = []) {
    if(!root) return [];
    
    postorderTraversal(root.left, arr);
    postorderTraversal(root.right, arr);
    arr.push(root.val);
    return arr;
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/binary-tree-postorder-traversal/