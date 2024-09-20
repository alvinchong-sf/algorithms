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
  const queue: [number, number, number][] = [];
  for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
          if (mat[r][c] === 0) {
              queue.push([r, c, 0]);
          } else {
              mat[r][c] = Infinity;
          }
      }
  }

  const sr = queue[0][0], sc = queue[0][1];
  const visited = new Set([`${sr}-${sc}`]);
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];
  while (queue.length) {
      console.log(queue)
      const [row, col, distant] = queue.shift() as [number, number, number];
      if (mat[row][col] === Infinity) {
          mat[row][col] = distant;
      }

      for (const [dx, dy] of directions) {
          const nr = dx + row;
          const nc = dy + col;
          const tuple = `${nr}-${nc}`;
          if (
              nr >= 0 && 
              nr < m && 
              nc >= 0 && 
              nc < n && 
              mat[nr][nc] === Infinity && 
              !visited.has(tuple)
          ) {
              queue.push([nr, nc, distant + 1]);
              visited.add(tuple);
          }
      }
  }
  return mat;
};