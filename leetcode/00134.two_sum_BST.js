// 653. Two Sum IV - Input is a BST

// Given the root of a Binary Search Tree and a target number k, return true 
// if there exist two elements in the BST such that their sum is equal to the 
// given target.

// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true


// DFS
var findTarget = function(root, k, set = new Set()) { 
    if(!root) return false;
    let left = findTarget(root.left, k, set);
    let diff = k - root.val;
    if(set.has(diff)) return true;
    set.add(root.val);
    let right = findTarget(root.right, k, set);
    return left || right;
};

// time o(n)
// space o(n)

// BFS
var findTarget = function(root, k) {
    let set = new Set();
    let queue = [root];
    
    while(queue.length) {
        let node = queue.shift();
        let diff = k - node.val;
        if(set.has(diff)) {
            return true;
        } else {
            set.add(node.val)
        }
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return false;
};
// time o(n)
// space o(n)