// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and 
// choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot 
// achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// greedy
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minBuy = prices[0];
    
    for(let i = 1; i < prices.length; i++) {
        minBuy = Math.min(minBuy, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minBuy)
    }
    return maxProfit;
};
// time o(n) | space o(1)

// DP
var maxProfit = function(prices) {
    if(prices.length < 2) return 0;
    const table = new Array(prices.length).fill(-Infinity);
    
    for(let i = 0; i < prices.length - 1; i++) {
        const buy = prices[i];
        for(let j = i + 1; j < prices.length; j++) {
            const sell = prices[j];
            const profit = sell - buy;
            table[j] = Math.max(table[j], profit)
        }
    }
    const res = Math.max(...table);
    return res < 0 ? 0 : res;
};
// time o(n^2) | space o(n)

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ 