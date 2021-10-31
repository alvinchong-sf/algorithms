// 1277. Count Square Submatrices with All Ones

// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

// Example 1:

// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation: 
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.

var countSquares = function(matrix) {
    let count = 0;
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) continue;
            if (row > 0 && col > 0) {
                const top = matrix[row - 1][col],
                      left = matrix[row][col - 1],
                      topLeft = matrix[row - 1][col - 1];
                
                matrix[row][col] += Math.min(top, left, topLeft)
            }
            
            count += matrix[row][col]
        }
    }
    
    return count;
};

// time o(n * m) | space o(1)
// https://leetcode.com/problems/count-square-submatrices-with-all-ones/