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

// time o(n^ 2)
// space o(n)
// https://leetcode.com/problems/diameter-of-binary-tree/