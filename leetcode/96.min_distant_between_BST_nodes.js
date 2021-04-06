// 783. Minimum Distance Between BST Nodes

// Given the root of a Binary Search Tree (BST), return the minimum difference 
// between the values of any two different nodes in the tree.

// Input: root = [4,2,6,1,3]
// Output: 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    // inorder traversal to get sorted numbers
    // [1,2,3,4,6]
    // smallest difference = 1
    // time o(n) | space o(n + h)
    
    let arr = [];          // linear space
    inOrder(root, arr);    // linear time // height of the tree
    
    let smallest = Infinity;
    
    for(let i = 0; i < arr.length - 1; i++) {  // linear time
        let current = arr[i];
        let next = arr[i + 1];
        let currentDiff = Math.abs(current - next);
        smallest = Math.min(smallest, currentDiff);
    }
    return smallest;
};

const inOrder = (node, array) => {
    if(!node) return null;
    
    if(node.left) inOrder(node.left, array);
    array.push(node.val);
    if(node.right) inOrder(node.right, array);
}

 // time o(n) | space o(n + h)
// https://leetcode.com/problems/minimum-distance-between-bst-nodes/