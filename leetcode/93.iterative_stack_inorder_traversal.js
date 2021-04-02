// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal 
// of its nodes' values.

var inorderTraversal = function(root) {
    if(!root) return [];
    let stack = [root];  // []
    let resultArr = [];  // [4,9,2,1,6,3,7]
    
    // let currentNode = root;
    while(stack.length) {
        let node = stack.pop();      // 7
        if(node.left) {
            stack.push(node);
            stack.push(node.left);
            node.left = null;
        } else if(!node.left) {
            resultArr.push(node.val);
            if(node.right) stack.push(node.right);
        }
    }
    return resultArr;
};

// time o(n) traversing entire tree
// space o(n) stack arr and resultArr

// https://leetcode.com/problems/binary-tree-inorder-traversal/