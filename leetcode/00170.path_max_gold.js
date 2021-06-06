var getMaximumGold = function(grid) {
    let goldArr = [];
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] !== 0) {
                dfs(grid, row, col, goldArr, 0);
            }
        }
    }
    return Math.max(...goldArr);
};

const dfs = (grid, row, col, goldArr, sum) => {
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
            goldArr.push(currSum);
            return;
    }
    
    let temp = grid[row][col];
    grid[row][col] = 0
    
    // top
    dfs(grid, row - 1, col, goldArr, currSum);
    
    // left
    dfs(grid, row, col - 1, goldArr, currSum);
    
    // right
    dfs(grid, row, col + 1, goldArr, currSum);
    
    // bottom
    dfs(grid, row + 1, col, goldArr, currSum);
    
    grid[row][col] = temp;
};

// time o(n * m) | space o(n * m)
// https://leetcode.com/problems/path-with-maximum-gold/