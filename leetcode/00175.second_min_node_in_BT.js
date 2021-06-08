// 671. Second Minimum Node In a Binary Tree

// Example 1:
// Input: root = [2,2,5,null,null,5,7]
// Output: 5
// Explanation: The smallest value is 2, the second smallest value is 5.

var findSecondMinimumValue = function(root) {
    if(!root) return -1;
    let queue = [root];
    let secondMinVal = Infinity;
    
    while(queue.length) {
        let node = queue.shift();
        if(node.val < secondMinVal) {
            if(node.val > root.val) secondMinVal = node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return secondMinVal === Infinity ? -1 : secondMinVal;
};

// time o(log(n))
// space o(log(n))
// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/