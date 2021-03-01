// 344. Reverse String

// Write a function that reverses a string. The input string is given as an array 
// of characters char[].

// Do not allocate extra space for another array, you must do this by modifying 
// the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    
    while(i < j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s;
};

// time o(n)
// space o(1)

// https://leetcode.com/problems/reverse-string/