// 792. Number of Matching Subsequences

// Given a string s and an array of strings words, return the number of words[i] 
// that is a subsequence of s.

// A subsequence of a string is a new string generated from the original string 
// with some characters (can be none) deleted without changing the relative 
// order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".

// Example 1:
// Input: s = "abcde", words = ["a","bb","acd","ace"]
// Output: 3
// Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".

var numMatchingSubseq = function(s, words) {
    let count = 0;
    for(const word of words) {
        const bool = validate(s, word);
        if(bool) count++;
    }
    return count;
};

const validate = (str1, str2) => {
    let i = 0, j = 0;
    
    while(i < str1.length && j < str2.length) {
        const char1 = str1[i];
        const char2 = str2[j];
        if(char1 !== char2) {
            i++;
        } else if(char1 === char2) {
            i++; j++;
        }
    };
    
    return j === str2.length ? true : false;
}

// time o(n * (w + s)) | space o(1)
// https://leetcode.com/problems/number-of-matching-subsequences/