// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return 
// the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a 
// different word or phrase, typically using all the original letters exactly once.

 

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function(strs) {
    let hash = {};
    
    for(let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let sortedWord = word.split("").sort().join("");
        if(hash[sortedWord] === undefined) hash[sortedWord] = [];
        hash[sortedWord].push(word);
    }
    return Object.values(hash)
}

// time o(m * nlog(n)) ; n is length of each word in array; m is length of array
// space o(n * m)
// https://leetcode.com/problems/group-anagrams/