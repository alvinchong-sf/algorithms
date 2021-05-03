// 1022. Sum of Root To Leaf Binary Numbers

// You are given the root of a binary tree where each node has a value 0 or 1.  
// Each root-to-leaf path represents a binary number starting with the most 
// significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this 
// could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from 
// the root to that leaf.

// Return the sum of these numbers. The answer is guaranteed to fit in a 
// 32-bits integer.

var sumRootToLeaf = function(root) {
    
    if(!root.left && !root.right) return root.val;
    
    let tempArr = []; 
    let sum = 0;
    
    const dfs = (root) => {       
        
        if(!root.left && !root.right) {
            let binary = tempArr.join("")
            sum += parseInt(binary, 2);
            return;
        }
        
        if(root.left) {
            tempArr.push(root.left.val);
            dfs(root.left);
            tempArr.pop();
        }
        
        if(root.right) {
            tempArr.push(root.right.val);
            dfs(root.right)
            tempArr.pop();
        }
    }
    
    tempArr.push(root.val);
    dfs(root);
    return sum;
};

// time o(n) - linear
// space o(m + h) - linear
// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/