
// brute force
// time o(2^n) n is height of tree | space o(n)
var findTilt = function(root) {
    if(!root) return 0;
    
    let left = findSum(root.left);
    let right = findSum(root.right);
    let diff = Math.abs(left - right);
    
    root.val = diff
    findTilt(root.left);
    findTilt(root.right);
    
    return findSum(root);
};

const findSum = (root, sum={total: 0}) => {
    if(!root) return 0;
    
    sum.total += root.val;
    
    if(root.left) findSum(root.left, sum);
    if(root.right) findSum(root.right, sum);
    
    return sum.total;
}

// Optimal PostOrder Traversal in Linear time
// time o(n) | space o(n)
var findTilt = function(root) {
    let sum = {total: 0};
    postOrder(root, sum);
    return sum.total
};

const postOrder = (root, sum) => {
    if(!root) return 0;
    
    let left = postOrder(root.left, sum);
    let right = postOrder(root.right, sum);
    sum.total += Math.abs(left - right);
    return root.val + left + right;
    
}

// https://leetcode.com/problems/binary-tree-tilt/