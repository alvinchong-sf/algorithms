// 279. Perfect Squares

// Given an integer n, return the least number of perfect square numbers that sum 
// to n.

// A perfect square is an integer that is the square of an integer; in other words, 
// it is the product of some integer with itself. For example, 1, 4, 9, and 
// 16 are perfect squares while 3 and 11 are not.

// DP Tabulation
var numSquares = function(n) {
    let perfectArr = [];
    let i = 1;
    let perfectSquare = i * i;
    while(perfectSquare <= n) {
        perfectArr.push(perfectSquare);
        i++; 
        perfectSquare = i * i;
    }
    
    let table = new Array(n + 1).fill(Infinity);
    table[0] = 0;
    
    for(const ps of perfectArr) {
        for(let i = 1; i < table.length; i++) {
            if(ps > i) continue;
            let result = i - ps;
            table[i] = Math.min(table[result] + 1, table[i]);
        }
    }
    return table[table.length - 1];
};

// time o(n * m) n is input num and m is number of perfectSquares
// space o(n + m) 
// https://leetcode.com/problems/perfect-squares/