// 59. Spiral Matrix II

// Given a positive integer n, generate an n x n matrix filled with elements 
// from 1 to n2 in spiral order.

// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

// time o(n^2) | space o(n^2)
var generateMatrix = function(n) {
    if(n === 1) return [[1]];
    
    let filling = 0;
    let matrix = new Array(n).fill(null).map(() => new Array(n).fill(null));
    
    let topRow = 0, botRow = n - 1, leftCol = 0, rightCol = n - 1;
    
    while(topRow <= botRow && leftCol <= rightCol) {
        
        // top
        for(let col = leftCol; col <= rightCol; col++) {
            filling++;
            matrix[topRow][col] = filling;
        }
        
        // right
        for(let row = topRow + 1; row <= botRow; row++) {
            filling++;
            matrix[row][rightCol] = filling;
        }
        
        // bot
        for(let col = rightCol - 1; col >= leftCol; col--) {
            filling++;
            matrix[botRow][col] = filling;
        }
        
        // left
        for(let row = botRow - 1; row > topRow; row--) {
            filling++;
            matrix[row][leftCol] = filling;
        }
        
        topRow++; botRow--; leftCol++; rightCol--
    }
    return matrix;
};

// https://leetcode.com/problems/spiral-matrix-ii/
// 