// 199. Binary Tree Right Side View

// Given the root of a binary tree, imagine yourself standing on the right 
// side of it, return the values of the nodes you can see ordered from top to bottom.

var rightSideView = function(root) {
    if(!root) return [];
    let resultArr = [];
    let queue = [root]
    
    while(queue.length) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if(i === size - 1) resultArr.push(node.val)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return resultArr;
};

// o(n) n is number of nodes in tree; if shift is linear; o(n^2)
// space o(n + h) where h is the height of the tree
// https://leetcode.com/problems/binary-tree-right-side-view/