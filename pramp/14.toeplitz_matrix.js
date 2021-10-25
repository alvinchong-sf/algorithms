// Toeplitz Matrix
// A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has 
// the same element. Given a non-empty matrix arr, write a function that returns 
// true if and only if it is a Toeplitz matrix. The matrix can be any dimensions, 
// not necessarily square.

// For example,

// [[1,2,3,4],
//  [5,1,2,3],
//  [6,5,1,2]]
// is a Toeplitz matrix, so we should return true, while

// [[1,2,3,4],
//  [5,1,9,3],
//  [6,5,1,2]]
// isn’t a Toeplitz matrix, so we should return false.


// time o(n * m) | space o(Min(n, m))
function isToeplitz(arr) {
  const visitedSet = new Set();
  
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      if (visitedSet.has(`${row}-${col}`)) {
        continue;
      } else {
        const result = dfs(arr, row, col, visitedSet, arr[row][col]);
        if (result === false) return false;
      }
    }
  }
  
  return true;
};

const dfs = (arr, row, col, visitedSet, target) => {
  if (row >= arr.length || col >= arr[row].length) return true;
  if (visitedSet.has(`${row}-${col}`)) return true;
   
  if (arr[row][col] !== target) return false;
  
  visitedSet.add(`${row}-${col}`)
  return dfs(arr, row + 1, col + 1, visitedSet, target);
}

const matrix1 = [[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]

const matrix2 = [[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]

console.log(isToeplitz(matrix1));
console.log(isToeplitz(matrix2));