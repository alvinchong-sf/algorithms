// 1161. Maximum Level Sum of a Binary Tree

// Given the root of a binary tree, the level of its root is 1, the level of 
// its children is 2, and so on.

// Return the smallest level x such that the sum of all the values of nodes at 
// level x is maximal.

// BFS
var maxLevelSum = function(root) {
    let largestSum = -Infinity;
    let largestLevel = null;
    let currentLevel = 1;
    
    let queue = [root];
    
    while(queue.length) {
        let currentSum = 0;
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            currentSum += node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        if(currentSum > largestSum) {
            largestSum = currentSum;
            largestLevel = currentLevel;
        }
        currentLevel++;
    }
    return largestLevel;
};

// time o(n) traverse all nodes in the entire tree; but o(n^2) if shift is linear
// space o(n) queue array


// DFS
var maxLevelSum = function(root) {
    // dfs -> iterative stack
    // dfs -> recursive stack
    if(!root.left && !root.right) return root.val
    
    let hash = {};
    dfs(root, 1, hash);
    
    let valuesArr = Object.values(hash);
    let largestVal = Math.max(...valuesArr);
    for(const [k, v] of Object.entries(hash)) {
        if(v === largestVal) return k;
    }
};

const dfs = (root, level, hash) => {
    if(!root) return null;
    
    if(hash[level] === undefined) hash[level] = 0;
    hash[level] += root.val;
    
    if(root.left) dfs(root.left, level + 1, hash);
    if(root.right) dfs(root.right, level + 1, hash);
}

// time o(n) | space o(n)

// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/