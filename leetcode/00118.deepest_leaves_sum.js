// 1302. Deepest Leaves Sum

// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

// bfs
var deepestLeavesSum = function(root) {
    
    if(!root.left && !root.right) return root.val;
    
    let resultArr = [];  // resultArr = [[1]]
    let queue = [root];  // queue = [3]
                                // // [1,2,3,4,5,null,6,7,null,null,null,null,8]
    while(queue.length) {    
        let tempArr = [];      // tempArr = []
        let size = queue.length;  //  size = 2
        for(let i = 0; i < size; i++) {  // i = 0
            let node = queue.shift();    // node = 2
            tempArr.push(node.val);       
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        resultArr.push(tempArr);
    }
  
    return resultArr[resultArr.length - 1].reduce((accu, ele) => accu + ele);
    
};

// time o(n + m) | space o(n^2) only if shift is constant time; otherwise time o(n^2)


// dfs
var deepestLeavesSum = function(root) {
    
    if(!root.left && !root.right) return root.val;
    let deepestLevel = findLevel(root);
    
    let totalSum = 0;
    
    const dfs = (root, level) => {
        
        if(level === deepestLevel) {
            totalSum += root.val;
            return;
        }
        
        if(root.left) dfs(root.left, level + 1);
        if(root.right) dfs(root.right, level + 1);
    }
    
    dfs(root, 1);
    return totalSum;
};

const findLevel = (root) => {
    if(!root) return 0;
    
    let left = findLevel(root.left);
    let right = findLevel(root.right);
    
    return 1 + Math.max(left, right);
}

// time o(n) | space o(h)
// https://leetcode.com/problems/deepest-leaves-sum/

