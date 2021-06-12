// 1306. Jump Game III
// Given an array of non-negative integers arr, you are initially positioned 
// at start index of the array. When you are at index i, you can jump to i + arr[i] 
// or i - arr[i], check if you can reach to any index with value 0.
// Notice that you can not jump outside of the array at any time.

// Example 1:
// Input: arr = [4,2,3,0,3,1,2], start = 5
// Output: true
// Explanation: 
// All possible ways to reach at index 3 with value 0 are: 
// index 5 -> index 4 -> index 1 -> index 3 
// index 5 -> index 6 -> index 4 -> index 1 -> index 3 

var canReach = function(arr, start) {
    
    const dfs = (arr, idx) => {
        if(idx < 0 || idx >= arr.length) return false;
        if(arr[idx] === -1) return false;
        if(arr[idx] === 0) return true;
        
        let temp = arr[idx];
        arr[idx] = -1;
        const left = dfs(arr, idx + temp);
        const right = dfs(arr, idx - temp);
        
        return left || right;
    }
    return dfs(arr, start);
};

// time o(n) | space o(n)
// https://leetcode.com/problems/jump-game-iii/