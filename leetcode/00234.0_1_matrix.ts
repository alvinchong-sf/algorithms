// 542. 01 Matrix

// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// example1:
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]
// https://leetcode.com/problems/01-matrix/

function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length, n = mat[0].length;
    const queue: [number, number][] = [];
    const visited = new Set<string>();
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    let steps = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] === 0) {
                queue.push([r, c]); 
                visited.add(`${r}-${c}`);
            }
            if (mat[r][c] === 1) mat[r][c] = Infinity;
        }
    }

    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift() as [number, number];
            if (mat[row][col] === Infinity) mat[row][col] = steps;
            for (const [dy, dx] of dirs) {
                const nr = dy + row;
                const nc = dx + col;
                if (
                    nr >= 0 
                    && nr < m 
                    && nc >= 0 
                    && nc < n 
                    && !visited.has(`${nr}-${nc}`) 
                    && mat[nr][nc] === Infinity
                ) {
                    queue.push([nr, nc]);
                    visited.add(`${nr}-${nc}`);
                }
            }
        }
        steps++;
    }
    return mat;
};