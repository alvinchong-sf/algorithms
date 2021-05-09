// 958. Check Completeness of a Binary Tree

// Given the root of a binary tree, determine if it is a complete binary tree.

// In a complete binary tree, every level, except possibly the last, is 
// completely filled, and all nodes in the last level are as far left as
//  possible. It can have between 1 and 2h nodes inclusive at the last level h.

var isCompleteTree = function(root) {
    if(!root.left && !root.right) return true;
    
    let queue = [root];
    let hasNullNode = false;
    
    while(queue.length) {
        let node = queue.shift();
        if(!node) {
            hasNullNode = true;
        } else {
            if(hasNullNode) return false
            queue.push(node.left);
            queue.push(node.right);   
        }
    }
    return true;
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/check-completeness-of-a-binary-tree/