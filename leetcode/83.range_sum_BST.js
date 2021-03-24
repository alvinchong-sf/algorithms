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

// stack solution
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


// DFS / pre-order
var rangeSumBST = function(root, low, high, memo ={sum: 0}) {
    if(!root) return;
    if(root.val >= low && root.val <= high) memo.sum += root.val;
    rangeSumBST(root.left, low, high, memo);
    rangeSumBST(root.right, low, high, memo);
    return memo.sum;
};

// queue / BFS
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    let queue = [root];
    
    while(queue.length) {
        let node = queue.shift();
        if(node.val >= low && node.val <= high) sum += node.val
        
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    
    return sum;
};