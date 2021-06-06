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

// time o(n^2) | space o(n)
// https://leetcode.com/problems/daily-temperatures/