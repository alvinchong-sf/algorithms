// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its 
// nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

var levelOrder = function(root) {
    // BFS
    // queue
    // [3]
    // shift this array out from queue
    // iterate all elements in this array
    // for each iteration find its left and right
    // push the left and right into a temp array
    // queue.push temp array
    // also for each ele we are iterating thru
    // place them in another array and push inso result
    // return the resultarr
    if(!root) return [];
    let resultArr = [];                     
    let queue = [[root]];                   
    
    while(queue.length && queue[0].length) {                // o(n)      
        let levelArr = [];                  
        let leftRightArr = [];              
        let nodeArr = queue.shift();                       //o(m)
        for(const node of nodeArr) {                       // o(p)
            if(node.left) leftRightArr.push(node.left);
            if(node.right) leftRightArr.push(node.right);
            levelArr.push(node.val);
        }
        queue.push(leftRightArr);
        resultArr.push(levelArr);
    }
    return resultArr;
};

// time o(n * m) n is the number of nodes and m is length of each level
// space o(n^2 * m^2)
// https://leetcode.com/problems/binary-tree-level-order-traversal/