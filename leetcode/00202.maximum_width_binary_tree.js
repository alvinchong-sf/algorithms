// 662. Maximum Width of Binary Tree
// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes 
// (the leftmost and rightmost non-null nodes), where the null nodes between the 
// end-nodes are also counted into the length calculation.

// It is guaranteed that the answer will in the range of 32-bit signed integer.

// Example 1:
// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).

// Example 2:
// Input: root = [1,3,null,5,3]
// Output: 2
// Explanation: The maximum width existing in the third level with the length 2 (5,3).

// Example 3:
// Input: root = [1,3,2,5]
// Output: 2
// Explanation: The maximum width existing in the second level with the length 2 (3,2).

// MY SOLUTION WITH NO OVERFLOW FACTORED IN
var widthOfBinaryTree = function(root) {
    const queue = [[root, 0]]; 
    let maxWidth = 0;
    
    while(queue.length) {
        const size = queue.length;   
        let startIdx = null, endIdx = null;
        for(let i = 0; i < size; i++) {     
            const [node, idx] = queue.shift();  
            if(i === 0) startIdx = idx;
            if(i === size - 1) endIdx = idx;
            if(node.left) queue.push([node.left, (idx * 2) + 1]);
            if(node.right) queue.push([node.right, (idx * 2) + 2]);
        }
        const currWidth = (endIdx - startIdx + 1);
        maxWidth = Math.max(maxWidth, currWidth);
    }

    return maxWidth;
};

// time o(n) | space o(n)
// https://leetcode.com/problems/maximum-width-of-binary-tree/


// Other people solution to FIX LAST 5 TEST CASES THAT CAUSES OVERFLOW
var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    let queue = [root];
    let queueIndex = [1];
    let maxWidth = 0;
    while(queue.length){
        let size = queue.length;
        let start = 0;
        let end = 0;
        for(let i=0; i<size; i++){
            let node = queue.shift();
            let index = queueIndex.shift();
            if(i===0) start = index;
            if(i===size - 1) end = index;
            
            //******2 test cases overflow without this*****
            if(index * 2 > Number.MAX_SAFE_INTEGER){
                index = 1;
            }
            //**********************************************
            if(node.left){
                queue.push(node.left);
                queueIndex.push(index * 2);
            }
            if(node.right){
                queue.push(node.right);
                queueIndex.push(index * 2 + 1);
            }
        }
        maxWidth = Math.max(maxWidth, end - start + 1);
    }
    return maxWidth;
};