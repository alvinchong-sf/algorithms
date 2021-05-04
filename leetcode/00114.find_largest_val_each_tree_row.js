// 515. Find Largest Value in Each Tree Row

// Given the root of a binary tree, return an array of the largest value in each 
// row of the tree (0-indexed).

var largestValues = function(root) {
    if(!root) return [];
    if(!root.left && !root.right) return [root.val];
    let resultArr = [];
    let queue = [root];
    
    while(queue.length) {
        let size = queue.length;
        let maxNum = -Infinity;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if(node.val > maxNum) maxNum = node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        resultArr.push(maxNum);
    }
    return resultArr;
};

// time o(n) n is the number of nodes in tree
// space o(h + n) h is height of tree
//  https://leetcode.com/problems/find-largest-value-in-each-tree-row/