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
  const m = mat.length;
  const n = mat[0].length;
  const queue: [number, number, number][] = [];

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      const cell = mat[row][col];
      if (cell === 0) {
        queue.push([row, col, 0]);
      } else {
        mat[row][col] = Infinity;
      }
    }
  }

  bfs(queue, mat, m, n);

  return mat;
}

function bfs(
    queue: [number, number, number][],
    mat: number[][],
    m: number,
    n: number
): void {
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    while (queue.length) {
        const [r, c, distant] = queue.shift();
        if (mat[r][c] === Infinity) {
        mat[r][c] = distant;
        }

        for (const [dx, dy] of directions) {
            const newRow = dx + r;
            const newCol = dy + c;

            if (
                newRow >= 0 &&
                newCol >= 0 &&
                newRow < m &&
                newCol < n &&
                mat[newRow][newCol] === Infinity
            ) {
                queue.push([newRow, newCol, distant + 1]);
            }
        }
    }
}