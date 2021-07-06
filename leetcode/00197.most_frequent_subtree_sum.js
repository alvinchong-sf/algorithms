// 508. Most Frequent Subtree Sum

// Given the root of a binary tree, return the most frequent subtree sum. If 
// there is a tie, return all the values with the highest frequency in any order.

// The subtree sum of a node is defined as the sum of all the node values 
// formed by the subtree rooted at that node (including the node itself).

// Example 1:
// Input: root = [5,2,-3]
// Output: [2,-3,4]

// Example 2:
// Input: root = [5,2,-5]
// Output: [2]

var findFrequentTreeSum = function(root) {
    const hash = {};
    let maxVal = -Infinity;
    
    const dfs = (root) => {
        if(!root) return 0;
        
        const left = dfs(root.left);
        const right = dfs(root.right);
        const sum = left + right + root.val;
        if(hash[sum] === undefined) hash[sum] = 0;
        hash[sum]++;
        maxVal = Math.max(maxVal, hash[sum]);
        return sum;
    }
    
    dfs(root);
    const resultArr = [];
    for(const [k, v] of Object.entries(hash)) {
        if(v === maxVal) resultArr.push(k)
    }
    return resultArr;
};

// time o(n) | space o(n)
// https://leetcode.com/problems/most-frequent-subtree-sum/