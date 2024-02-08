// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function getHeight(root) {
    if(!root) return -1;
    let left = getHeight(root.left);
    let right = getHeight(root.right);
    return 1 + Math.max(left, right);
}


var isBalanced = function(root) {
    if(!root) return true;
    let maxLeftHeight = getHeight(root.left);
    let maxRightHeight = getHeight(root.right);
    let isBalanceTree = Math.abs(maxLeftHeight - maxRightHeight) <= 1
    return isBalanceTree && isBalanced(root.left) && isBalanced(root.right);
};