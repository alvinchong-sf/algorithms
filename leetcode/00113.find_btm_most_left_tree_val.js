// 513. Find Bottom Left Tree Value

// Given the root of a binary tree, return the leftmost value in the last row 
// of the tree.

// BFS time o(n * m) | space o(n * m)
var findBottomLeftValue = function(root) {
    // queue = [[1],[2,3],[4,5,6],[7]]
    // brute force bfs solution
    let resultArr = [];   // resultArr = [[1],[2,3],[4,5,6],[7]]
    let queue = [root];  // []
    
    while(queue.length) {
        let size = queue.length;  // size = 1
        let tempArr = [];        // tempArr = [7]
        for(let i = 0; i < size; i++) { // i = 1
            let node = queue.shift();     // node = 7
            tempArr.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        resultArr.push(tempArr);
    }
    return resultArr[resultArr.length - 1][0];
};

// DFS time o(n) | space o(h)
var findBottomLeftValue = function(root) {
    if(!root.left && !root.right) return root.val;
    let maxLevel = 0; // maxLevel = 3
    let resultValue = null; // 4
    
    const dfs = (root, level) => {
        
        if(!root.left && !root.right) {
            if(level > maxLevel) {
                maxLevel = level;
                resultValue = root.val;
            }
        }
        
        if(root.left) {
            dfs(root.left, level + 1);
        }
        
        if(root.right) {
            dfs(root.right, level + 1);
        }
    }
    
    dfs(root, 1);
    return resultValue;
};

// https://leetcode.com/problems/find-bottom-left-tree-value/submissions/