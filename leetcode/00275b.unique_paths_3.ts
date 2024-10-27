/*
980. Unique Paths III
You are given an m x n integer array grid where grid[i][j] could be:
    1 representing the starting square. There is exactly one starting square.
    2 representing the ending square. There is exactly one ending square.
    0 representing empty squares we can walk over.
    -1 representing obstacles that we cannot walk over.

Return the number of 4-directional walks from the starting square to the ending square, that 
walk over every non-obstacle square exactly once.

Example 1:
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

Example 2:
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

Example 3:
Input: grid = [[0,1],[2,0]]
Output: 0
Explanation: There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.

Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 20
    1 <= m * n <= 20
    -1 <= grid[i][j] <= 2
    There is exactly one starting cell and one ending cell.

https://leetcode.com/problems/unique-paths-iii/description/
*/

function uniquePathsIII(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    const set = new Set<string>();
    const result: [number] = [0];
    const [sr, sc] = findStart(grid, m, n, set);
    dfs(grid, sr, sc, m, n, result, set);
    return result[0];
};

function dfs(
    grid: number[][],
    r: number,
    c: number,
    m: number,
    n: number,
    result: [number],
    set: Set<string>
): void {
    if (r < 0 || c < 0 || r >= m || c >= n) return;
    if (grid[r][c] === 2) {
        if (set.size === 0) {
            result[0]++;
        }
        return;
    }
    if (grid[r][c] === -1) return;

    const temp = grid[r][c];
    console.log(`${r}-${c}`)
    grid[r][c] = -1;
    set.delete(`${r}-${c}`);
    dfs(grid, r + 1, c, m, n, result, set);
    dfs(grid, r - 1, c, m, n, result, set);
    dfs(grid, r, c + 1, m, n, result, set);
    dfs(grid, r, c - 1, m, n, result, set);
    grid[r][c] = temp;
    set.add(`${r}-${c}`);
}

function findStart(grid: number[][], m: number, n: number, set: Set<string>): [number, number] {
    const result: [number, number] = [-1, -1];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                result[0] = r;
                result[1] = c;
            };

            if (grid[r][c] === 0 || grid[r][c] === 1) {
                set.add(`${r}-${c}`);
            }
        }
    }
    return result;
}