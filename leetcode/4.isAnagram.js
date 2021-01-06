//Valid Anagram

//Given two strings s and t , write a function to determine if t is an anagram of s.

// create a hash map
// iterate string s and place in hash
// where key is character from string and value is the #times it appears
// do the same for the other string but decrement the value instead
// finally check the hash map to see if all values are 0

var isAnagram = function(s, t) {
    let hash = {};
    
    t.split("").forEach((char) => {
        if(hash[char] === undefined) {hash[char] = 0}
        hash[char] += 1
    })
    
    s.split("").forEach((char) => {
        if(hash[char] === undefined) {hash[char] = 0}
        hash[char] -= 1
    })
    
    return Object.values(hash).every((ele) => ele === 0);
    
    
};

//   https://leetcode.com/problems/valid-anagram/

//time: o(n)
//space: o(1)