// 429. N-ary Tree Level Order Traversal

// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, 
// each group of children is separated by the null value (See examples).

  // Definition for a Node.
function Node(val,children) {
    this.val = val;
    this.children = children;
}
 
var levelOrder = function(root) {
    if(!root) return []
    let resultArr = [];        // [ [1], [3,2,4], [5,6] ]
    let queue = [root];        // []
    
    while(queue.length) {
        let tempArr = [];       // [5,6]
        let size = queue.length;  // 2
        for(let i = 0; i < size; i++) { // i = 1
            let node = queue.shift();  // 6
            tempArr.push(node.val);
            node.children.forEach(child => queue.push(child))
        }
        resultArr.push(tempArr);
    }
    
    return resultArr;
};

// time o(n) linear- traversing entire tree
// space o(n^2) linear- resultArr length grows as tree gets larger
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/