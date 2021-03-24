// 938. Range Sum of BST

// Given the root node of a binary search tree, return the sum of values of 
// all nodes with a value in the range [low, high].

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

// Definition for a binary tree node.

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var rangeSumBST = function(root, low, high) {
    let sum = 0;
    let stack = [root];
    
    while(stack.length) {
        let node = stack.pop();
        if(node.val >= low && node.val <= high) {
            sum += node.val
        }
        
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return sum;
};

// time o(n) n is number of nodes
// space o(h) h is height of tree

// https://leetcode.com/problems/range-sum-of-bst/

