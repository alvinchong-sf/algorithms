// 129. Sum Root to Leaf Numbers

// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so 
// that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

var sumNumbers = function(root) {
    if(!root.left && !root.right) return root.val;
    
    let resultArr = [];  // ["495","491"]
    let stack = [root.val];  // stack = [4,9]
    
    const dfs = (root) => {
        
        if(!root.left && !root.right) {
            resultArr.push(stack.join(""));
            return;
        }
        
        if(root.left) {
            stack.push(root.left.val);
            dfs(root.left);  // cs: 4|
            stack.pop();
        }
        
        if(root.right) {
            stack.push(root.right.val);
            dfs(root.right);
            stack.pop();
        }
        return;
    }
    
    dfs(root);
    return resultArr.reduce((accu, num) => accu + parseInt(num), 0 );
    
};

// time o(n + m)  n is nodes in trees, m is number of path in trees
// space o(h + m) h is height of tree, m is number of path in trees
// https://leetcode.com/problems/sum-root-to-leaf-numbers/