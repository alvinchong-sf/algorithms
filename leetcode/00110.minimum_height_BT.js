// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the 
// root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

var minDepth = function(root) {
    if(!root) return null;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    if(left === null || right === null) {
        return 1 + Math.max(left, right)
    }
    return 1 + Math.min(left, right);
};

// time o(n)
// space o(1)
// https://leetcode.com/problems/minimum-depth-of-binary-tree/