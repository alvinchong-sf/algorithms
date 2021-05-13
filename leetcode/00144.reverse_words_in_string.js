// 151. Reverse Words in a String

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s 
// will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between 
// two words. The returned string should only have a single space separating the 
// words. Do not include any extra spaces.

var reverseWords = function(s) {
    let resultArr = [];
    let i = 0;
    let j = 0;
    
    while(i < s.length && j < s.length) {
        if(s[i] === " ") {
            i++;;
        } else {
            j = i;
            
            while(s[j] !== " " && j < s.length) {
                j++;
            }
            
            let temp = s.slice(i, j);
            resultArr.unshift(temp);
            i = j;
        }
    }
    
    return resultArr.join(" ");
};

// time o(n)
// space o(n)
// https://leetcode.com/problems/reverse-words-in-a-string/