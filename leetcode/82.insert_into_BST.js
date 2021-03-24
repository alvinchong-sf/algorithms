// 701. Insert into a Binary Search Tree

// You are given the root node of a binary search tree (BST) and a value to insert 
// into the tree. Return the root node of the BST after the insertion. 
// It is guaranteed that the new value does not exist in the original BST.

// Notice that there may exist multiple valid ways for the insertion, as long as 
// the tree remains a BST after insertion. You can return any of them.


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var insertIntoBST = function(root, val) {
    // check to see if val is < root <= 
    // if < go left if >= go right
    // recursively repeat the same process until either left or right === null
    // if null we can insert into BST
    
    if(!root) {
        return new TreeNode(val);
    } else if(val < root.val) {
        if(!root.left) {
            root.left = new TreeNode(val);
        } else {
            insertIntoBST(root.left, val);
        }
    } else if(val >= root.val) {
        if(!root.right) {
            root.right = new TreeNode(val);
        } else {
            insertIntoBST(root.right, val);
        }
    }
    return root;
};

// time o(log(n))
// space o(log(n))
// https://leetcode.com/problems/insert-into-a-binary-search-tree/