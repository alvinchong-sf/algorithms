// Given a string s consists of some words separated by spaces, return the length 
// of the last word in the string. If the last word does not exist, return 0.
// A word is a maximal substring consisting of non-space characters only.

// eg.1
// Input: s = "Hello World"
// Output: 5

// eg.2
// Input: s = " "
// Output: 0

var lengthOfLastWord = function(s) {
    s = s.trim();
    let sentenceArr = s.split(" ");
    let lastWord = sentenceArr[sentenceArr.length - 1];
    return lastWord.length;
};

// time o(n)
// https://leetcode.com/problems/length-of-last-word/