// Matrix Spiral Copy
// Given a 2D array (matrix) inputMatrix of integers, create a function 
// spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, 
// clockwise. Your function then should return that array. Analyze the time and 
// space complexities of your solution.

// Example:
// input:  inputMatrix  = [ [1,    2,   3,  4,    5],
//                          [6,    7,   8,  9,   10],
//                          [11,  12,  13,  14,  15],
//                          [16,  17,  18,  19,  20] ]

// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]


function spiralCopy(inputMatrix) {
  const resultArr = [];
  let startRow = 0,
      endRow = inputMatrix.length - 1,
      startCol = 0,
      endCol = inputMatrix[0].length - 1;
  
  while (startRow <= endRow && startCol <= endCol) {
    
    for (let col = startCol; col <= endCol; col++) {
      const num = inputMatrix[startRow][col];
      resultArr.push(num);
    }
    
    for (let row = startRow + 1; row <= endRow; row++) {
      const num = inputMatrix[row][endCol];
      resultArr.push(num);
    }
    
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      const num = inputMatrix[endRow][col];
      resultArr.push(num);
    }
    
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      const num = inputMatrix[row][startCol];
      resultArr.push(num);
    }
    
    startRow++; endRow--;
    startCol++; endCol--;
  }
  
  return resultArr;
}