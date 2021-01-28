// 100. Same Tree

// Given the roots of two binary trees p and q, write a function to check if 
// they are the same or not.

// Two binary trees are considered the same if they are structurally identical, 
// and the nodes have the same value.

var isSameTree = function(p, q) {
    if(!p && !q) return true;
    
    if(!q || !p || p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// time o(n) needs to compare every node
// space o(1) extra space because not storing anything, just comparing
// https://leetcode.com/problems/same-tree/