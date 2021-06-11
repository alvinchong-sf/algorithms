// 566. Reshape the Matrix

// In MATLAB, there is a handy function called reshape which can reshape an 
// m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the 
// row number and column number of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original 
// matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output 
// the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:
// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

var matrixReshape = function(nums, r, c) {
    const flattenArr = nums.flat();
    let newMatrix = new Array(r).fill().map(() => new Array(c).fill(null));
    
    let i = 0;
    for(let row = 0; row < r; row++) {
        for(let col = 0; col < c; col++) {
            newMatrix[row][col] = flattenArr[i];
            i++;
        }
    }
    console.log(newMatrix)
    return i === flattenArr.length ? newMatrix : nums;
};

// time o(n * m)
// space o(n * m)
// https://leetcode.com/problems/reshape-the-matrix/