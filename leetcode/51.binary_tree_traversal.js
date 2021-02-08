// 107. Binary Tree Level Order Traversal II


// Given a binary tree, return the bottom-up level order traversal of its 
// nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7

var levelOrderBottom = function(root) {
    if (!root) return []; 
    let queue = [root];
    let result = [];
    while(queue.length) {
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            current.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.unshift(current);
    }
    return result;
};

// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/