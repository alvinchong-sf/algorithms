// 103. Binary Tree Zigzag Level Order Traversal

// Given the root of a binary tree, return the zigzag level order traversal of 
// its nodes' values. (i.e., from left to right, then right to left for the next 
//     level and alternate between).

var zigzagLevelOrder = function(root) {
    if(!root) return []
    
    let resultArr = [];
    let queue = [root];
    let level = 0;
    
    while(queue.length) {
        let tempArr = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            (level % 2 === 0) ? tempArr.push(node.val) : tempArr.unshift(node.val)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        level++;
        resultArr.push(tempArr)
    }
    return resultArr;
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/