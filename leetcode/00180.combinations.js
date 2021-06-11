// 77. Combinations
// Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
// You may return the answer in any order.

// Example 1:
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

var combine = function(n, k) {
    let combinationsArr = [];
    let tempArr = [];
    
    const dfs = (tempArr, idx) => {
        
        if(tempArr.length === k) {
            combinationsArr.push(tempArr.slice());
            return;
        };
        
        for(let i = idx; i <= n; i++) {
            dfs([...tempArr, i], i + 1)
        }
    }
    
    dfs(tempArr, 1);
    return combinationsArr;
};

// https://leetcode.com/problems/combinations/