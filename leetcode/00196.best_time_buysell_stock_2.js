// 122. Best Time to Buy and Sell Stock II

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions 
// as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions simultaneously (i.e., you 
// must sell the stock before you buy again).

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.


// greedy
var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i + 1] > prices[i]) {
            maxProfit += prices[i + 1] - prices[i]
        }
    }
    return maxProfit;
};
// time o(n) | space o(1)


// dynamic programming
var maxProfit = function(prices) {
    const table = new Array(prices.length).fill(-Infinity);
    table[0] = 0;
    
    for(let i = 1; i < prices.length; i++) {
        const today = prices[i],
              yesterday = prices[i - 1];
        table[i] = Math.max(table[i - 1], table[i - 1] + today - yesterday)
    }
    return table[table.length - 1];
};
// time o(n) | space o(1);