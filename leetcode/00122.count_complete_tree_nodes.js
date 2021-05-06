var countNodes = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 1;
    
    let maxHeight = findHeight(root);
    let secondLastLevel = maxHeight - 1;
    let numNodes = 0;
    let resultArr = [];
    
    const dfs = (root, level) => {
        
        if(level === secondLastLevel) resultArr.push(root);
        if(level === maxHeight) return;
        numNodes++;
        if(root.left) dfs(root.left, level + 1);
        if(root.right) dfs(root.right, level + 1);
    }
    
    dfs(root, 1);
    for(const node of resultArr) {
        if(node.left && node.right) {
            numNodes += 2;
        } else if(node.left) {
            numNodes++;
            return numNodes;
        }
        if(!node.left) return numNodes;
    }
    return numNodes;
};

const findHeight = (root) => {
    if(!root) return 0;
    let left = findHeight(root.left);
    let right = findHeight(root.right);
    return 1 + Math.max(left, right);
}

// time o(n + m) n is number of nodes; m is number of nodes on second last level of tree
// space o(h + m) h is height of tree and m is # of nodes on second last level
// https://leetcode.com/problems/count-complete-tree-nodes/