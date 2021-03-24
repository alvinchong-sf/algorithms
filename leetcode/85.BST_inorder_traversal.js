// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,3,2]

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var inorderTraversal = function(root, array = []) {
    if(!root) return [];
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
    return array;
};

// time o(n)
// space o(h) h is height of tree
// https://leetcode.com/problems/binary-tree-inorder-traversal/