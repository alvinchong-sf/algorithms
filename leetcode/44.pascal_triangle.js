// 118. Pascal's Triangle
// Given a non-negative integer numRows, generate the first numRows 
// of Pascal's triangle.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
    
    let pascalTriangle = [];
    
    while(pascalTriangle.length < numRows) {
        
        if(!pascalTriangle.length) {
            pascalTriangle.push([1]);
            continue;
        }
        let lastRow = pascalTriangle[pascalTriangle.length - 1];
        let newRow = [1];

        for(let i = 0; i < lastRow.length - 1; i++) {
            newRow.push(lastRow[i] + lastRow[i + 1]);
        }
        newRow.push(1)
        pascalTriangle.push(newRow);
    }
    return pascalTriangle;
};

// time o(n * m)
// space o(n * m)
// https://leetcode.com/problems/pascals-triangle/