/*
200. Number of Islands
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands. An island is surrounded by water and is formed by connecting 
adjacent lands horizontally or vertically. You may assume all four edges of the grid are all 
surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is '0' or '1'.

https://leetcode.com/problems/number-of-islands/description/
Time: O() | Space: O()
*/

function numIslands(grid: string[][]): number {
    let numIslands = 0;
    const m = grid.length, n = grid[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === "1") {
                // dfs(grid, r, c, m, n);
                bfs(grid, r, c, m, n, dirs);
                numIslands++;
            }
        }
    }
    return numIslands;    
};

function bfs(grid: string[][], row: number, col: number, m: number, n: number, dirs: number[][]): void {
    const queue: [number, number][] = [[row, col]];
    grid[row][col] = "0";
    let i = 0;

    while (i < queue.length) {
        const [oldRow, oldCol] = queue[i++]; // pointer based instead of queue.shift()
        for (const [dx, dy] of dirs) {
            const newRow = oldRow + dx;
            const newCol = oldCol + dy;
            if (
                newRow >= 0 && newRow < m &&
                newCol >= 0 && newCol < n &&
                grid[newRow][newCol] === "1"
            ) {
                queue.push([newRow, newCol]);
                grid[newRow][newCol] = "0";
            }
        }
    }
}

function dfs(grid: string[][], row: number, col: number, m: number, n: number): void {
    if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] !== "1") {
        return;
    }
    grid[row][col] = "0";
    dfs(grid, row + 1, col, m, n);
    dfs(grid, row - 1, col, m, n);
    dfs(grid, row, col + 1, m, n);
    dfs(grid, row, col - 1, m, n);
}