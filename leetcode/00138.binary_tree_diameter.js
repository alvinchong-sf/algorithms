var diameterOfBinaryTree = function(root) {
    if(!root) return null;
    
    let left = findHeight(root.left);
    let right = findHeight(root.right);
    let sum = left + right;
    return Math.max(sum, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right));
};

const findHeight = (root) => {
    if(!root) return 0;
    let left = findHeight(root.left);
    let right = findHeight(root.right);
    return 1 + Math.max(left, right);
}
// time o(n^2)
// space o(n)
// https://leetcode.com/problems/diameter-of-binary-tree/



var diameterOfBinaryTree = function(root) {
    let diameter = 0;  
    
    const dfs = (root) => {
        if(!root) return 0;
        let left = dfs(root.left); 
        let right = dfs(root.right); 
        let sum = left + right; 
        diameter = Math.max(diameter, sum); 
        return 1 + Math.max(left, right);
        
    }
    dfs(root);
    return diameter;
};

// time o(n)
// space o(h) if balanced; if not o(n);