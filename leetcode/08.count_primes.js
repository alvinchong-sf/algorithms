// Count the number of prime numbers less than a non-negative number, n.

//eg.1
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

//eg.2
// Input: n = 0
// Output: 0

var countPrimes = function(n) {
    let count = 0;
    let table = new Array(n).fill(true);
    
    for(let i = 2; i * i < n; i++) {
        if(table[i]) {
            for(let j = i; j * i < n; j++) {
                table[j * i] = false;
            }
        }
    }
    
    for(let i = 2; i < n; i++) {
        if(table[i]) count++;
    }
    
    return count;
};

// time o(n) i think
// solution is actually an implementation "Sieve of Eratosthenes"
// https://leetcode.com/problems/count-primes/