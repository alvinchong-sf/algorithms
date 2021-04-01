// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and 
// '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands 
// horizontally or vertically. You may assume all four edges of the grid are 
// all surrounded by water.

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

var numIslands = function(grid) {
    let count = 0;
    let visited = grid.map(row => row.map(val => false));
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === "0") {
                visited[i][j] = true;
            } else if(visited[i][j] === true) { 
                continue;
            } else {
                dfs(i, j, grid, visited)
                count++;
            }
        }
    }
    return count;
};

const dfs = (i, j, grid, visited) => {
    let stack = [[i, j]];
    let idx1, idx2;
    
    while(stack.length) {
        let node = stack.pop();
        idx1 = node[0];
        idx2 = node[1];
        visited[idx1][idx2] = true;
        if(grid[idx1][idx2] === "1") {
            // top
            if(idx1 > 0 && !visited[idx1 - 1][idx2]) stack.push([idx1 - 1, idx2]);
            // bottom
            if(idx1 < grid.length - 1 && !visited[idx1 + 1][idx2]) stack.push([idx1 + 1, idx2]);
            // left
            if(idx2 > 0 && !visited[idx1][idx2 - 1]) stack.push([idx1, idx2 - 1]);
            // right
            if(idx2 < visited[0].length -1 && !visited[idx1][idx2 + 1]) stack.push([idx1, idx2 + 1]);
        }
    }
}

// time o(n * m)
// space o(n * m)
// https://leetcode.com/problems/number-of-islands/