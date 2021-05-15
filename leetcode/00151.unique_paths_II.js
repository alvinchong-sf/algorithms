// 63. Unique Paths II

// A robot is located at the top-left corner of a m x n grid (marked 'Start' 
// in the diagram below).

// The robot can only move either down or right at any point in time. The 
// robot is trying to reach the bottom-right corner of the grid (marked 'Finish' 
// in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique 
// paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0] === 1) return 0;
    
    let height = obstacleGrid.length;
    let width = obstacleGrid[0].length;
    
    let grid = new Array(height).fill().map(() => new Array(width).fill());
    
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(obstacleGrid[i][j] === 1) {
                grid[i][j] = "X"
            } else {
                grid[i][j] = "E"
            }
        }
    }
    
    
    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            if(row === 0 || col === 0) {
                if(grid[row][col] === "E") {
                    grid[row][col] = 1;
                } else if (grid[row][col] === "X") {
                    
                    if(row === 0) {
                        for(let j = col; j < width; j++) {
                            grid[row][j] = 0;
                        }
                    }
                    
                    if(col === 0) {
                        for(let i = row; i < height; i++) {
                            grid[i][col] = 0;
                        }
                    }
                }
            } else if (grid[row][col] === "X") {
                grid[row][col] = 0;
            } else if (grid[row][col] === 0) {
                continue;
            } else if (grid[row][col] === "E") {
                let top = grid[row - 1][col] === "X" ? 0 : grid[row - 1][col];
                let left = grid[row][col - 1] === "X" ? 0 : grid[row][col - 1];
                grid[row][col] = top + left;
            }
        }
    }
    
    return grid[height - 1][width - 1];
};

// time o(n * m) | space o(n * m)
// https://leetcode.com/problems/unique-paths-ii/