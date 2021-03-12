// 700. Search in a Binary Search Tree

// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the 
// subtree rooted with that node. If such a node does not exist, return null.

var searchBST = function(root, val) {
    let stack = [root];
    
    while(stack.length) {
        let node = stack.pop();
        if(node.val === val) return node;
        
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    return null;
};

// brute force
// time o(n)
// space o(n) not sure if o(1) extra or o(n) extra
///////////////////////////////////////////////////////////////////////////////

var searchBST = function(root, val) {
    if(root.val === val) {
        return root;
    } else if (root.val > val) {
        if(!root.left) {
            return null;
        } else {
            return searchBST(root.left, val)
        }
    } else if(root.val <= val) {
        if(!root.right) {
            return null;
        } else {
            return searchBST(root.right, val)
        }
    }
};

// time o(log(n))
// space o(log(n))
// https://leetcode.com/problems/search-in-a-binary-search-tree/