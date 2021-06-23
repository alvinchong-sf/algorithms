// 139. Word Break
// Given a string s and a dictionary of strings wordDict, return true if s can be 
// segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.'

// Example 1:
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    const table = new Array(s.length + 1).fill(false);
    table[0] = true;
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j <= s.length; j++) {
            const str = s.slice(i, j);
            if(set.has(str) && table[i]) {
                table[j] = true;
                if(table[s.length]) return true;
            }
        }
    }
    return false;
};

// time o(n * m) n is length of dictionary; m is length of input string
// space o(n + m)
// https://leetcode.com/problems/word-break/
