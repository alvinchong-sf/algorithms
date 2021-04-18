// 125. Valid Palindrome
// Given a string s, determine if it is a palindrome, considering only 
// alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    const set = new Set();
    
    for(let i = 0; i < alphabet.length; i++) {
        set.add(alphabet[i])
    }
    let arr = [];
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(set.has(char.toLowerCase())) {
            arr.push(char.toLowerCase())
        }
    }
    
    if(arr.length === 1) return true;
    let i = 0;
    let j = arr.length - 1;
    
    while(i < j) {
        if(arr[i] !== arr[j]) {
            return false;
        }
        i++; j--;
    }
    return true;
    
};

// time o(3n) => o(n) linear
// space o(n) -> result arr increase as input increases

// https://leetcode.com/problems/valid-palindrome/