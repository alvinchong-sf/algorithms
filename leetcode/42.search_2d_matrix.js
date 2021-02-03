// Write an efficient algorithm that searches for a value in an m x n matrix. 
// This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the 
// previous row.

var searchMatrix = function(matrix, target) {
    let i = 0;
    let j = matrix[0].length - 1;
    
    while(i < matrix.length && j >= 0) {
        if(matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] < target) {
            i++;
        } else if (matrix[i][j] > target) {
            j--;
        }
    }
    return false;
};

// time o(n + m);
// space o(1) extra space
// https://leetcode.com/problems/search-a-2d-matrix/