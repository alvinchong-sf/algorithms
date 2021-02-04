// 119. Pascal's Triangle II
// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    let res = [1];
    let prevPascal = getRow(rowIndex - 1);
    for(let i = 0; i < prevPascal.length - 1; i++) {
        let sum = prevPascal[i] + prevPascal[i + 1];
        res.push(sum);
    }
    res.push(1);
    return res;
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/pascals-triangle-ii/