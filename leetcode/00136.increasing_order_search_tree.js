// 897. Increasing Order Search Tree

// Given the root of a binary search tree, rearrange the tree in in-order 
// so that the leftmost node in the tree is now the root of the tree, and 
// every node has no left child and only one right child.

var increasingBST = function(root) {
    let arr = [];
    const inOrder = (root) => {
        if(!root) return;
        inOrder(root.left);
        arr.push(root);
        inOrder(root.right);
    }
    inOrder(root);
    for(let i = 0; i < arr.length; i++) {
         arr[i].left = null;
        if(i === arr.length - 1) {
            arr[i].right = null;
            continue;
        }
        arr[i].right = arr[i + 1];
    }
    return arr[0];
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/increasing-order-search-tree/