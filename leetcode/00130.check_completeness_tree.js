// 958. Check Completeness of a Binary Tree

// Given the root of a binary tree, determine if it is a complete binary tree.

// In a complete binary tree, every level, except possibly the last, is 
// completely filled, and all nodes in the last level are as far left as
//  possible. It can have between 1 and 2h nodes inclusive at the last level h.
// https://leetcode.com/problems/check-completeness-of-a-binary-tree/

// time o(n) | space o(n)
var isCompleteTree = function(root) {
    if(!root.left && !root.right) return true;
    
    let queue = [root];
    let hasNullNode = false;
    
    while(queue.length) {
        let node = queue.shift();
        if(!node) {
            hasNullNode = true;
        } else {
            if(hasNullNode) return false
            queue.push(node.left);
            queue.push(node.right);   
        }
    }
    return true;
};

/**
Python solution

from collections import deque
class Solution:
    def isCompleteTree(self, root: Optional[TreeNode]) -> bool:
        if root is None: return True
        queue = deque([root])
        is_leaf = False

        while queue:
            node = queue.popleft()
            if node.left is None and node.right is None:
                is_leaf = True
            if is_leaf and (node.left or node.right):
                return False
            else:
                if node.left and node.right:
                    queue.append(node.left)
                    queue.append(node.right)
                elif node.left:
                    queue.append(node.left)
                    is_leaf = True
                elif node.right:
                    return False

        return True
 */