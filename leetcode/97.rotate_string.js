// 796. Rotate String

// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character 
// to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' 
// after one shift on A. Return True if and only if A can become B after some 
// number of shifts on A.

var rotateString = function(A, B) {
    // stack / queue
    // A = [a,b,c,d,e]
    // B = [c,d,e,a,b]
    
    // A.join === B.join; if true return
    // if A.length !== B.length return false
    // counter = A.length => 0
    // while (counter > 0) 
    // A.unshift => A.push abcde
    // join and compare again
    // return true if A.join === B.join at any point in the while loop
    // return false at the end
    
    if(A.length !== B.length) return false;
    if(A === B) return true;
                                                   // A = 'abcde'
    let counter = A.length;   //5                  // B = 'cdeab'
    while(counter > 0) {   // linear time
        A = A.split("");    // linear time
        let ele = A.shift();       // linear time
        A.push(ele);
        A = A.join("")           // linear time
        if(A === B) return true;
        counter--;
    }
    return false;
};

// time o(n^2)
// space o(1)

// https://leetcode.com/problems/rotate-string/