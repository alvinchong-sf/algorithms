// 50. Pow(x, n)
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// iterative solution
var myPow = function(x, n) {
    if(n === 0) return 1;
    x = n < 0 ? 1/x : x;
    n = Math.abs(n);
    let total = 1
    for(let i = 1; i <= n; i++) {
        total *= x
    }
    return total;
};

// recursive solution
var myPow = function(x, n) {
    if(n === 0) return 1;
    
    if(n > 0) {
        return x * myPow(x, n - 1);
    } else {
        return (1/x) * myPow(x, n + 1)
    }
};

// binary search
var myPow = function(x, n) {
    if(n === 0) return 1;
    if(n === 1) return x;
    if(n === -1) return 1/x;
    
    let exponent = n > 0 ? Math.floor(n / 2) : Math.ceil(n / 2);
    const half = myPow(x, exponent);
    let result;
    if(n % 2 === 0) {
        result = half * half
    } else {
        result = n > 0 ? half * half * x : half * half * 1/x
    }
    return result;
};