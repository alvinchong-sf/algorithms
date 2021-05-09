// 559. Maximum Depth of N-ary Tree

// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root 
// node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, 
// each group of children is separated by the null value (See examples).


// BFS
var maxDepth = function(root) {
    if(!root) return 0;
    let count = 0
    let queue = [root];
    
    while(queue.length) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            node.children.forEach(child => queue.push(child));
        }
        count++;
    }
    return count;
};
// time o(n)
// space o(n)


// DFS 
var maxDepth = function(root) {
    if(!root) return 0;
    let maxLevel = 0;
    
    const dfs = (root, level) => {
        if(!root) return;
        
        if(level > maxLevel) {
            maxLevel = level;
        }
        
        root.children.forEach(child => dfs(child, level + 1));
    }
    
    dfs(root, 1);
    return maxLevel;
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/