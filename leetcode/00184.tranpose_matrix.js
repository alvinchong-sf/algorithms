var transpose = function(matrix) {
    let outerArr = [];
    
    for(let col = 0; col < matrix[0].length; col++) {
        let innerArr = [];
        for(let row = 0; row < matrix.length; row++) {
            innerArr.push(matrix[row][col]);
        }
        outerArr.push(innerArr);
    }
    return outerArr;
};

// time o(n * m) | space o(n * m)
// https://leetcode.com/problems/transpose-matrix/