// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.


// recursive with memoization
function climbStairs(n, memo = {}) {

    if(n in memo) return memo[n]
    if(n === 0) return 1;
    if(n === 1) return 1;
    
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};

// time o(n);
// space o(n);


// tabulation way
function climbStairs(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;

    let secondLast = 1;
    let last = 1;

    for(let i = 2; i <= n; i++) {
        let temp = last;
        last = last + secondLast;
        secondLast = temp;
    }
    return last;
}

// time o(n);
// space o(1);
