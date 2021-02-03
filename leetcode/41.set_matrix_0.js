// Given an m x n matrix. If an element is 0, set its entire row and column to 0. 
// Do it in-place.

var setZeroes = function(matrix) {
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) matrix[i][j] = true;
        }
    }
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === true) {
                
                matrix[i][j] = 0;
                
                for(let k = 0; k < matrix[i].length; k++) {
                    if(matrix[i][k] !== true) matrix[i][k] = 0;
                }
                
                for(let l = 0; l < matrix.length; l++) {
                    if(matrix[l][j] !== true) matrix[l][j] = 0;
                }
            } 
        }
    }
    return matrix;
};

// time o(n^2 * m)
// space o(1) extra space
// https://leetcode.com/problems/set-matrix-zeroes/