// 538. Convert BST to Greater Tree

// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such 
// that every key of the original BST is changed to the original key plus sum of 
// all keys greater than the original key in BST.

// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

var convertBST = function(root) {
    if(!root) return null;
    let sum = 0;
    
    const dfs = (root) => {
        if(!root) return 0;
        
        sum += root.val;
        
        if(root.left) dfs(root.left);
        if(root.right) dfs(root.right);
    }
    dfs(root);
    
    const inorder = (root) => {
        if(!root) return null;
        
        if(root.left) inorder(root.left);
        
        let tempVal = root.val
        root.val = sum;
        sum -= tempVal;
        
        if(root.right) inorder(root.right);
    }
    
    inorder(root);
    return root;
};

// time o(2n) n is number of nodes
// space o(2h) h is height of tree

var convertBST = function(root) {
    let sum = 0;
    
    const invertedInorder = (root) => {
        if(!root) return;
        
        if(root.right) invertedInorder(root.right);
        
        sum += root.val;
        root.val = sum;
        
        if(root.left) invertedInorder(root.left);
        
        return;
    }
    
    invertedInorder(root);
    return root;
};

// time o(n) 1 pass
// space o(h) 
// https://leetcode.com/problems/convert-bst-to-greater-tree/

