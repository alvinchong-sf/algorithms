"""
739. Daily Temperatures
Given an array of integers temperatures represents the daily temperatures, return an array answer 
such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]

Constraints:
    1 <= temperatures.length <= 105
    30 <= temperatures[i] <= 100

// https://leetcode.com/problems/daily-temperatures/
"""
# Time: O(n) | Space: O(n)
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        if n == 1: return 0
        result = [0 for _ in range(n)]
        monotonic_stack = [[temperatures[n - 1], n - 1]]

        for i in range(n - 2, -1, -1):
            while monotonic_stack and monotonic_stack[-1][0] <= temperatures[i]:
                monotonic_stack.pop()
            
            if len(monotonic_stack) != 0:
                result[i] = monotonic_stack[-1][1] - i
            
            monotonic_stack.append([temperatures[i], i])
        
        return result

"""
Previous solution in Javascript
time o(n^2) | space o(n)
var dailyTemperatures = function(temperatures) {
    let resultArr = [];
    
    for(let i = 0; i < temperatures.length; i++) {
        let count = 0;
        let j = i;
        while(temperatures[j] <= temperatures[i] && j < temperatures.length) {
            j++; count++;
        }
        if(j >= temperatures.length) count = 0;
        resultArr.push(count);
    }
    
    return resultArr;
};
"""