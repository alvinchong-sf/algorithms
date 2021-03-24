// 530. Minimum Absolute Difference in BST

// Given a binary search tree with non-negative values, find the minimum absolute 
// difference between values of any two nodes.


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var getMinimumDifference = function(root) {
    // inorder traversal to get them sorted in an array
    // iterate thru the array and find the smallest diff
    
    let arr = [];
    inOrder(root, arr);
    let smallest = Infinity;
    for(let i = 0; i < arr.length - 1; i++) {
        let num1 = arr[i];
        let num2 = arr[i + 1];
        smallest = Math.min(smallest, Math.abs(num1 - num2));
    }
    return smallest;
};

const inOrder = (node, array) => {
    if(!node) return;
    inOrder(node.left, array);
    array.push(node.val);
    inOrder(node.right, array);
}

// time o(2n) => o(n)
// space o(n)
// https://leetcode.com/problems/minimum-absolute-difference-in-bst/