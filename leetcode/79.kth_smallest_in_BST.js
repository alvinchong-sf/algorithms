// 230. Kth Smallest Element in a BST
// Given the root of a binary search tree, and an integer k, return the 
// kth (1-indexed) smallest element in the tree.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var kthSmallest = function(root, k) {
    // we can use an inorder traversal and push our node values into array
    // this will give us a sorted array from increasing order
    // return array[k - 1];
    
    let arr = [];
    inorder(root, arr);
    return arr[k - 1]
    // return arr[arr.length - k] <--- Side note; this will return the largest
};

const inorder = (node, array) => {
    if(!node) return;
    inorder(node.left, array);
    array.push(node.val);
    inorder(node.right, array);
}

// time o(n)
// space o(n)

// https://leetcode.com/problems/kth-smallest-element-in-a-bst/