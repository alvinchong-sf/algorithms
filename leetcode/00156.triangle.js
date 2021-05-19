
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
    
    dfs(triangle, 0 , 0, 0);
    
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