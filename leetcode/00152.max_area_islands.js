// 695. Max Area of Island
// You are given an m x n binary matrix grid. An island is a group of 
// 1's (representing land) connected 4-directionally (horizontal or vertical.) 
// You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Input: grid = [
//                 [0,0,1,0,0,0,0,1,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,1,1,1,0,0,0],
//                 [0,1,1,0,1,0,0,0,0,0,0,0,0],
//                 [0,1,0,0,1,1,0,0,1,0,1,0,0],
//                 [0,1,0,0,1,1,0,0,1,1,1,0,0],
//                 [0,0,0,0,0,0,0,0,0,0,1,0,0],
//                 [0,0,0,0,0,0,0,1,1,1,0,0,0],
//                 [0,0,0,0,0,0,0,1,1,0,0,0,0]
//             ]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

var maxAreaOfIsland = function(grid) {
    let largestIsland = 0;
    
    let height = grid.length;
    let width = grid[0].length;
    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            if(grid[row][col] === 1) {
                let count = {islands: 0}
                dfs(row, col, grid, count);
                largestIsland = Math.max(count.islands, largestIsland);
            } else if (grid[row][col] === 0 || grid[row][col] === "V") {
                continue;
            }
        }
    }
    return largestIsland;
};

const dfs = (i, j, grid, count) => {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
    if(grid[i][j] !== 1) return;
    
    count.islands++
    grid[i][j] = "V";
    dfs(i + 1, j, grid, count);
    dfs(i - 1, j, grid, count);
    dfs(i, j + 1, grid, count);
    dfs(i, j - 1, grid, count);
}
// time o(n * m) | space o(n + m)
// https://leetcode.com/problems/max-area-of-island/