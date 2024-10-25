/*
1905. Count Sub Islands
You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) 
and 1's (representing land). An island is a group of 1's connected 4-directionally (horizontal 
or vertical). Any cells outside of the grid are considered water cells.
An island in grid2 is considered a sub-island if there is an island in grid1 that contains all 
the cells that make up this island in grid2. Return the number of islands in grid2 that are 
considered sub-islands.

Example 1:
Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], 
grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
Output: 3
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.

Example 2:
Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], 
grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
Output: 2 
Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.

Constraints:
    m == grid1.length == grid2.length
    n == grid1[i].length == grid2[i].length
    1 <= m, n <= 500
    grid1[i][j] and grid2[i][j] are either 0 or 1.

https://leetcode.com/problems/count-sub-islands/description/
Time: O(n * m) | Space: O(n * m)
*/

// DFS Solution:
function countSubIslands(grid1: number[][], grid2: number[][]): number {
    const m = grid1.length, n = grid1[0].length;
    const set = new Set<string>();
    let subIslands = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid1[r][c] === 1) set.add(`${r}-${c}`);
        }
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid2[r][c] === 1) {
                const isSubIsland = dfs(grid2, r, c, m, n, set);
                if (isSubIsland) subIslands++;
            }
        }
    }

    return subIslands;
};

function dfs(
    grid: number[][],
    r: number,
    c: number,
    m: number,
    n: number,
    set: Set<string>,
): boolean {
    if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] !== 1) return true;
    if (!set.has(`${r}-${c}`)) return false;
    grid[r][c] = 0;

    const bot = dfs(grid, r + 1, c, m , n, set);
    const top = dfs(grid, r - 1, c, m , n, set);
    const right = dfs(grid, r, c + 1, m , n, set);
    const left = dfs(grid, r, c - 1, m , n, set);

    return bot && top && right && left;
}