// 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true if 
// the tree has a root-to-leaf path such that adding up all the values along 
// the path equals targetSum.

// A leaf is a node with no children.


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    
    
    if(!root.right && !root.left) {
        return root.val === targetSum;
    }
    
    let remainder = targetSum - root.val;
    
    let left =  hasPathSum(root.left, remainder);
    let right = hasPathSum(root.right, remainder);
    
    return left || right;
    
};

// time o(n) traversing thry all nodes.
// space o(1) extra
// https://leetcode.com/problems/path-sum/