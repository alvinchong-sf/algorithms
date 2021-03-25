// 144. Binary Tree Preorder Traversal
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

var preorderTraversal = function(root) {
    let arr = []
    helper(root, arr);
    return arr;
};

const helper = (node, array) => {
    if(!node) return;
    array.push(node.val);
    helper(node.left, array);
    helper(node.right, array);
}

// time o(n)
// space o(n) 
// https://leetcode.com/problems/binary-tree-preorder-traversal/