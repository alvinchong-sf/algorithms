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

// time O(n * m) | space O(Max(n, m))
// https://leetcode.com/problems/max-area-of-island/

function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    const dirs: [number, number][] = [[1,0],[-1,0],[0,1],[0,-1]];
    let maxIslandSize = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                // const currIslandSize = dfs(grid, r, c, m, n);
                const currIslandSize = bfs(grid, r, c, m, n, dirs);
                maxIslandSize = Math.max(currIslandSize, maxIslandSize);
            }
        }
    }

    return maxIslandSize;
};

function bfs(grid: number[][], r: number, c: number, m: number, n: number, dirs: [number, number][]): number {
    const queue = [[r, c]];
    grid[r][c] = 0;
    let count = 0;

    while (queue.length) {
        const [row, col] = queue.shift() as [number, number];
        for (const [dy, dx] of dirs) {
            const nr = row + dy;
            const nc = col + dx;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
                queue.push([nr, nc]);
                grid[nr][nc] = 0; // push during enqueue to avoid infinite loop issue
            }
        }
        count++;
    }
    return count;
}

function dfs(grid: number[][], r: number, c: number, m: number, n: number): number {
    if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] !== 1) return 0;

    grid[r][c] = 0;
    const bot = dfs(grid, r + 1, c, m, n);
    const top = dfs(grid, r - 1, c, m, n);
    const right = dfs(grid, r, c + 1, m, n);
    const left = dfs(grid, r, c - 1, m, n);

    return bot + top + right + left + 1;
}