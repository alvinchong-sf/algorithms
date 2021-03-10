// 322. Coin Change

// You are given coins of different denominations and a total amount of money 
// amount. Write a function to compute the fewest number of coins that you need 
// to make up that amount. If that amount of money cannot be made up by any 
// combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// eg1
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

var coinChange = function(coins, amount) {
    // coins = [1,2,5] ; i = 1
    // table = [0,1,1,2,4,5,6,7,8,9,10,11,03] ; x => Infinity
    // index = [0,1,2,3,4,5,6,7,8,9,10,11,12] ; index represents dollar value
    // if coin value > index value, we cant make change
    // if coin value <= index value, then yes we can make change
    // index value - coin value = answer
    //      3      -       2    =  1
    // coin + table[answer]   =   min number of coin 
    //  1   +      1          =    2
    //table[current iteration] = Math.min(table[current Iteration], coin + table[answer])
    
    
    let table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;
    
    for(let coin of coins) {
        for(let i = 0; i < table.length; i++) {
            if(coin <= i) {
                let ans1 = i - coin;
                let ans2 = 1 + table[ans1];
                table[i] = Math.min(table[i], ans2);
            }
        }
    }
    return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};

// time o(n * m)
// space o(n)
// https://leetcode.com/problems/coin-change/