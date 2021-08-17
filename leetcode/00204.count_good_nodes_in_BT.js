// 1448. Count Good Nodes in Binary Tree

// Given a binary tree root, a node X in the tree is named good if in the path 
// from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Example 1:
// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

var goodNodes = function(root) {
    let count = 1;
    
    const dfs = (root, maxVal) => {
      
        if (root.left) {
            if (root.left.val >= maxVal) count++;
            const currMaxVal = Math.max(root.left.val, maxVal)
            dfs(root.left, currMaxVal);
        };
        
        if (root.right) {
            if (root.right.val >= maxVal) count++;
            const currMaxVal = Math.max(root.right.val, maxVal);
            dfs(root.right, currMaxVal);
        }
    };
    
    dfs(root, root.val)
    return count;
};

// time o(n) | n is number of nodes in tree
// space o(h) if balance o(n) if unbalance BT
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/