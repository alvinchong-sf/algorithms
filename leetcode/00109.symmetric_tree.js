var isSymmetric = function(root) {
    if(!root) return true;
    
    return dfs(root.left, root.right);
};

const dfs = (leftNode, rightNode) => {
    if(!leftNode && !rightNode) return true;
    if(!leftNode || !rightNode) return false;
    if(leftNode.val !== rightNode.val) return false;
    
    let temp1 = dfs(leftNode.left, rightNode.right);
    let temp2 = dfs(leftNode.right, rightNode.left);
    
    return temp1 && temp2;
}

// time o(n) all nodes in tree
// space o(h) height of tree
// https://leetcode.com/problems/symmetric-tree/