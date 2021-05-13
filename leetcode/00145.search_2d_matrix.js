// 240. Search a 2D Matrix II

// Write an efficient algorithm that searches for a target value in an m x n 
// integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    
    while(row < matrix.length && col >= 0) {
        if(target === matrix[row][col]) {
            return true;
        } else if(target < matrix[row][col]) {
            col--
        } else {
            row++;
        }
    }
    return false;
};

// o(n + m)
// space o(1)
// https://leetcode.com/problems/search-a-2d-matrix-ii/