// 114. Flatten Binary Tree to Linked List

// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child 
// pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.


var flatten = function(root) {
    if(!root) return;
    if(!root.left && !root.right) return;
    
    let stack = [root]; // stack = [5,4]
    // 1-> 2 ->3->4
    while(stack.length) {
        let node = stack.pop(); // node = 3
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
        
        if(!stack.length) {
            node.right = null
        } else {
            node.right = stack[stack.length - 1];   
        }
        node.left = null;
    }
    return;
    
};

// time o(n)
// space o(h)
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/


// Morris Traversal
var flatten = function(root) {
    let node = root;
    while(node) {
        if(!node.left) {
            node = node.right
        } else {
            let pred = node.left;
            while(pred.right && pred.right != node) {
                pred = pred.right
            }
            
            if(!pred.right) {
                pred.right = node;
                node = node.left
            } else {
                pred.right = node.right
                node.right = node.left
                node.left = null
                node = node.right
            }
        }
    }
};

// time o(n)
// space o(1)
