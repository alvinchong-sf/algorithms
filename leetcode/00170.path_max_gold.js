// 1219. Path with Maximum Gold

// In a gold mine grid of size m x n, each cell in this mine has an integer 
// representing the amount of gold in that cell, 0 if it is empty.

// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.
 

// Example 1:
// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.

var getMaximumGold = function(grid) {
    let maxGold = {total: 0};
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] !== 0) {
                dfs(grid, row, col, maxGold, 0);
            }
        }
    }
    return maxGold.total;
};

const dfs = (grid, row, col, maxGold, sum) => {
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
        return;
    }
    
    if(grid[row][col] === 0) return;
    
    let currSum = sum + grid[row][col];
    
    if( 
        (row - 1 < 0 || grid[row - 1][col] === 0) &&
        (col - 1 < 0 || grid[row][col - 1] === 0) &&
        (col + 1 >= grid[0].length || grid[row][col + 1] === 0) &&
        (row + 1 >= grid.length || grid[row + 1][col] === 0)
        ) {
            maxGold.total = Math.max(maxGold.total, currSum);
            return;
    }
    
    let temp = grid[row][col];
    grid[row][col] = 0
    
    // top
    dfs(grid, row - 1, col, maxGold, currSum);
    
    // left
    dfs(grid, row, col - 1, maxGold, currSum);
    
    // right
    dfs(grid, row, col + 1, maxGold, currSum);
    
    // bottom
    dfs(grid, row + 1, col, maxGold, currSum);
    
    grid[row][col] = temp;
};

// time o(n * m) | space o(n * m)
// https://leetcode.com/problems/path-with-maximum-gold/