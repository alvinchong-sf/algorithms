/*
994. Rotting Oranges
You are given an m x n grid where each cell can have one of three values:
    0 representing an empty cell,
    1 representing a fresh orange, or
    2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this 
is impossible, return -1.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

Constraints:
    m == grid.length
    n == grid[i].length
    1 <= m, n <= 10
    grid[i][j] is 0, 1, or 2.

https://leetcode.com/problems/rotting-oranges/description/
Time: O(n) | Space: O(n)
*/

function orangesRotting(grid: number[][]): number {
    const rottenOrange = 2, freshOrange = 1;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const m = grid.length, n = grid[0].length;
    if (isAllNoOrange(grid, m, n)) return 0;
    const queue = findOranges(grid, m, n, rottenOrange);
    if (!queue.length) return -1;
    let minute = 0;
    const visited = new Set<string>();
    for (const [r, c] of queue) {
        visited.add(`${r}-${c}`);
    }

    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift() as [number, number];
            for (const [dy, dx] of directions) {
                const nr = row + dy;
                const nc = col + dx;
                if (isValid(nr, nc, m, n, visited, grid)) {
                    visited.add(`${nr}-${nc}`);
                    grid[nr][nc] = 2;
                    queue.push([nr, nc]);
                }
            }
        }
        minute++;
    }
    const rottenOranges = findOranges(grid, m , n, freshOrange);
    return rottenOranges.length ? -1 : minute - 1;
};

function isAllNoOrange(grid: number[][], m: number, n: number): boolean {
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1 || grid[r][c] === 2) return false;
        }
    }
    return true;
}

function isValid(
    nr: number, 
    nc: number, 
    m: number, 
    n: number, 
    visited: Set<string>,
    grid: number[][],
): boolean {
    return (
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        !visited.has(`${nr}-${nc}`) &&
        grid[nr][nc] === 1
    )
}

function findOranges(
    grid: number[][],
    m: number, 
    n: number, 
    orangeType: number
): [number, number][] {
    const rottenOranges: [number, number][] = [];

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === orangeType) {
                rottenOranges.push([r, c]);
            }
        }
    }

    return rottenOranges;
}