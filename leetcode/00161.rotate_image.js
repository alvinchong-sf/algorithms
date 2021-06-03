// 48. Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 
// 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 
// 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

var rotate = function(matrix) {
    
    // transpose square (n*n) matrix in place
    for(let row = 0; row < matrix.length; row++) {
        for(let col = row + 1; col < matrix.length; col++) {
            [ matrix[row][col], matrix[col][row] ] = [ matrix[col][row], matrix[row][col] ];
        }
    }
    
    // reverse each row
    for(let row = 0; row < matrix.length; row++) {
        matrix[row].reverse();
    }
    return matrix;
};

// time o(n^2) | space o(1)
// https://leetcode.com/problems/rotate-image/