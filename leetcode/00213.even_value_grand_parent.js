// 1315. Sum of Nodes with Even-Valued Grandparent

// Given the root of a binary tree, return the sum of values of nodes with an 
// even-valued grandparent. If there are no nodes with an even-valued grandparent, 
// return 0.
// A grandparent of a node is the parent of its parent if it exists.

// Example 1:
// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while 
// the blue nodes are the even-value grandparents.


//  time o(n) | space o(h)
var sumEvenGrandparent = function(root) {
    let sum = 0;
    
    const dfs = (root, parent, grandParent) => {
        if (grandParent !== null) {
            if (grandParent.val % 2 === 0) {
                sum += root.val;
            }
        }
        
        if (root.left) dfs(root.left, root, parent);
        if (root.right) dfs(root.right, root, parent);
    };
    
    dfs(root, null, null) 
    return sum;
};