// Island Count
// Given a 2D array binaryMatrix of 0s and 1s, implement a function 
// getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

// An island is defined as a group of adjacent values that are all 1s. A cell in 
// binaryMatrix is considered adjacent to another cell if they are next to each 
// either on the same row or column. Note that two values of 1 are not part of 
// the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

// Explain and code the most efficient solution possible and analyze its time and space complexities.

// Example:
// input:  binaryMatrix = [ [0,    1,    0,    1,    0],
//                          [0,    0,    1,    1,    1],
//                          [1,    0,    0,    1,    0],
//                          [0,    1,    1,    0,    0],
//                          [1,    0,    1,    0,    1] ]

// time o(n * m) | space o(n * m)
function getNumberOfIslands(binaryMatrix) {
  let countIslands = 0;
  
  for (let row = 0; row < binaryMatrix.length; row++) {
    for (let col = 0; col < binaryMatrix[0].length; col++) {
      const ele = binaryMatrix[row][col];
      if (ele === 1) {
        dfs(row, col, binaryMatrix);
        countIslands++;
      } 
    }
  }
  
  return countIslands;
}

const dfs = (row, col, binaryMatrix) => {
  if (row < 0 || col < 0 || row >= binaryMatrix.length || col >= binaryMatrix[0].length) {
    return;
  };
  if (binaryMatrix[row][col] !== 1) return;
  
  binaryMatrix[row][col] = "V";
  dfs(row - 1, col, binaryMatrix);
  dfs(row + 1, col, binaryMatrix);
  dfs(row, col - 1, binaryMatrix);
  dfs(row, col + 1, binaryMatrix);
};