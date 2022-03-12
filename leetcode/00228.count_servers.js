// 1267. Count Servers that Communicate

// You are given a map of a server center, represented as a m * n integer matrix 
// grid, where 1 means that on that cell there is a server and 0 means that it is 
// no server. Two servers are said to communicate if they are on the same row or 
// on the same column.

// Return the number of servers that communicate with any other server.

 

// Example 1:
// Input: grid = [[1,0],[0,1]]
// Output: 0
// Explanation: No servers can communicate with others.

// Example 2:
// Input: grid = [[1,0],[1,1]]
// Output: 3
// Explanation: All three servers can communicate with at least one other server.

// Example 3:
// Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
// Output: 4
// Explanation: The two servers in the first row can communicate with each other. 
// The two servers in the third column can communicate with each other. The server 
// at right bottom corner can't communicate with any other server.

// time o(n * m) | space o(n + m)
var countServers = function(grid) {
    const rowHash = {},
          colHash = {};
    let numServers = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                // add to rowHash
                row in rowHash ? rowHash[row]++ : rowHash[row] = 1;
                // add to colHash
                col in colHash ? colHash[col]++ : colHash[col] = 1;
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                if (rowHash[row] > 1 || colHash[col] > 1) {
                    numServers++;
                }
            }
        }
    }  
    return numServers;
};




// time o(n^2 * m^2) | space o(1)
var countServers = function(grid) {
    let numServers = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                const res1 = findRowServer(row, col, grid);
                const res2 = findColServer(row, col, grid);
                if (res1 || res2) numServers++;
            }
        }
    }
    return numServers;
};

const findRowServer = (currRow, currCol, grid) => {
    const row = grid[currRow];
    for (let col = 0; col < row.length; col++) {
        if (col === currCol) continue;
        if (row[col] === 1) return true;
    }
    return false;
};

const findColServer = (currRow, currCol, grid) => {
    for (let row = 0; row < grid.length; row++) {
        const val = grid[row][currCol];
        if (row === currRow) continue;
        if (val === 1) return true;
    }
    return false;
};
