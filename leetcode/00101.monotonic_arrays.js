// 896. Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  
// An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.

// Example 1:

// Input: [1,2,2,3]
// Output: true

var isMonotonic = function(A) {
    // notes
    // monotone increasing => next ele >=
    // monotone decreasing => next ele <=
    // return true if increasing || deacreasing
    // input array always at least length == 1
    // elements in array are integers
    
    // better implementation ?
    // sorting ? compare the sorted version with the original ?
    // time n log(n)
    
    // implement (brute force)
    // [6,5,4,4]
    // isIncreasing = null; => false
    // first loop => check for increasing
    // isDecreasing = null; => true
    // second loop => check for decreasing
    // return isIncreasing || isDecreasing
    // time o(2n) | space o(1) extra space
     
    let isIncreasing = true;
    let isDecreasing = true;
    
    // increasing
    for(let i = 0; i < A.length - 1; i++) {
        let firstEle = A[i];
        let secondEle = A[i + 1];
        
        if(secondEle < firstEle ){
            isIncreasing = false;    
        }
        
        if(secondEle > firstEle) {
            isDecreasing = false;
        }
        
    }
    return isIncreasing || isDecreasing;
};

// https://leetcode.com/problems/monotonic-array/