// 120. Triangle
// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More 
// formally, if you are on index i on the current row, you may move to either 
// index i or index i + 1 on the next row.

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).


// DFS
var minimumTotal = function(triangle) {
    let minSum = Infinity;                  
                                                
    const dfs = (triangle, i, j, sum) => {  
        let currSum = sum += triangle[i][j]; 
        
        if(i >= triangle.length - 1) {
            minSum = Math.min(minSum, currSum);
            return;
        }
        
        dfs(triangle, i + 1, j, currSum);
        dfs(triangle, i + 1, j + 1, currSum);
    }
    
    dfs(triangle, 0, 0, 0);
    
    return minSum;
};

// time o(2^n) 
// space o(2^n)


// Dynamic Programming
var minimumTotal = function(triangle) {

    let table = new Array(triangle.length).fill().map((arr, i) => new Array(i + 1).fill(Infinity));
    table[0][0] = triangle[0][0];
        
    for(let i = 0; i < triangle.length - 1; i++) {
        for(let j = 0; j < triangle[i].length; j++) {
            table[i + 1][j] = Math.min(table[i][j] + triangle[i + 1][j], table[i + 1][j]);
            table[i + 1][j + 1] = Math.min(table[i][j] + triangle[i + 1][j + 1], table[i + 1][j + 1]);
        }
    }

    let lastArr = table[table.length - 1];
    return Math.min(...lastArr);
}

// time o(n * m)
// space o(n * m)
// https://leetcode.com/problems/triangle/