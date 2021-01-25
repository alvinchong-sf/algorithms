// 383. Ransom Note
// Given an arbitrary ransom note string and another string containing letters 
// from all the magazines, write a function that will return true if the ransom 
// note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

var canConstruct = function(ransomNote, magazine) {
    // create hash map from ransomNote where key is char and value is counter
    // iterate thru magazine and check for inclusion. if matches, then we decrement the counter;
    // return true if all values in ransomNote is zero.
    
    let hash = {};
    
    for(let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if(hash[char] === undefined) hash[char] = 0;
        hash[char]++;
    }
    
    for(let j = 0; j < magazine.length; j++) {
        let char = magazine[j];
        if(hash[char]) hash[char]--;
    }
    
    return Object.values(hash).every((num) => num === 0);
};

// time: o(n);
// space: o(n);
// https://leetcode.com/problems/ransom-note/

