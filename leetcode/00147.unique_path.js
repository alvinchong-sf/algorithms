// 62. Unique Paths

// A robot is located at the top-left corner of a m x n grid (marked 'Start' 
// n the diagram below).

// The robot can only move either down or right at any point in time. The robot 
// is trying to reach the bottom-right corner of the grid (marked 'Finish' 
// in the diagram below).

// How many possible unique paths are there?

// Input: m = 3, n = 7
// Output: 28

// time: o(n * m) | space: o(n * m)
var uniquePaths = function(m, n) {

    let table = new Array(m).fill().map(subArr => new Array(n).fill());
    table[0][0] = 1;
    
    for(let row = 0; row < m; row++) {
        for(let col = 0; col < n; col++) {
            if (row === 0 || col === 0) {
                table[row][col] = 1;
            } else {
                table[row][col] = table[row - 1][col] + table[row][col - 1];
            }
        }
    }
    return table[m - 1][n - 1];
};

// https://leetcode.com/problems/unique-paths/