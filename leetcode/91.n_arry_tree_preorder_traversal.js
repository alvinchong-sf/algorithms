// 589. N-ary Tree Preorder Traversal

// Given the root of an n-ary tree, return the preorder traversal of 
// its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. 
// Each group of children is separated by the null value (See examples)

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]

function Node(val, children) {
    this.val = val;
    this.children = children;
};

// iterative stack
var preorder = function(root) {
    let resultArr = [];
    let stack = [root];
    
    while(stack.length) {
        let node = stack.pop();
        if(!node) continue;
        resultArr.push(node.val);
        node.children.reverse().forEach(child => stack.push(child))
    }
    return resultArr;
};

// time o(n) linear; traversing thru all the nodes
// space o(n) linear space (resultArr and stack arr)

//////////////////////////////////////////////////////////////////////////////

// DFS 
var preorder = function(root) {
    let arr = [];
    helper(root, arr);
    return arr;
};

const helper = (node, array) => {
    if(!node) return;
    array.push(node.val);
    node.children.forEach((child) => {
        helper(child, array)
    })
}

// time o(n) linear; traversing thru all the nodes
// space o(n) => recursive stack + resultArr 

// https://leetcode.com/problems/n-ary-tree-preorder-traversal/