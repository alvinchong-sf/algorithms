// 134. Gas Station

// There are n gas stations along a circular route, where the amount of gas at 
// the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to 
// travel from the ith station to its next (i + 1)th station. You begin the 
// journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index 
// if you can travel around the circuit once in the clockwise direction, otherwise 
// return -1. If there exists a solution, it is guaranteed to be unique

// Example 1:
// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

// greedy 
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0, currGas = 0, startIdx = 0;
    
    for(let i = 0; i < gas.length; i++) {
        totalGas += (gas[i] - cost[i]);
        currGas += (gas[i] - cost[i]);
        if (currGas < 0) {
            currGas = 0;
            startIdx = i + 1;
        }
    }
    
    return totalGas >= 0 ? startIdx : -1;
};
// time o(n) | space o(1)

// brute force 
var canCompleteCircuit = function(gas, cost) {
    for(let i = 0; i < gas.length; i++) {
        let gasTank = gas[i];
        let j = (i + 1) % gas.length
        while (j % gas.length !== i) {
            let gasCost = j - 1 < 0 ? cost[cost.length - j - 1] : cost[j - 1];
            if(gasTank >= gasCost) {
                gasTank -= gasCost;
                gasTank += gas[j];
                j = (j + 1) % gas.length;
            } else {
                break;
            }
        }
        if( i === j) {
            let gasCost = j - 1 < 0 ? cost[cost.length - j - 1] : cost[j - 1];
            return gasTank >= gasCost ? i : -1
        }
    }
    return -1;
};
// time o(n^2) | space o(1)
// https://leetcode.com/problems/gas-station/