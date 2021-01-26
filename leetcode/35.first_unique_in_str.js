// 387. First Unique Character in a String
// Given a string, find the first non-repeating character in it and return its 
// index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
    // create a hash map, and iterate thru str, where key is letter and value is counter;
    // iterate thru the hash map and return the letter the moment we find value is 1;
    // find the index of that letter from the original str.
    // return that index
    
    let hash = {};
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(hash[char] === undefined) hash[char] = 0;
        hash[char]++;
    }
    
    for(const [k, v] of Object.entries(hash)) {
        if(v === 1) {
            return s.indexOf(k)
        }
    }
    return -1;
};

// time o(n * m) because indexOf is o(n); if there is a way to put indexOf outside
// the loop than the time can be o(n)

// space is o(n) because of hash map;

// https://leetcode.com/problems/first-unique-character-in-a-string/