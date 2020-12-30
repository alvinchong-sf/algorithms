//Given a string s, find the length of the longest substring without repeating characters.

// sliding window implementation
// declare 3 variables longest, i and j
// initialize a new set
// use a while loop to loop through the string
// we want to loop until either s or j has reach the max length
// we use a set here to keep track of seen str
// use longest to keep track of the max length and i - j trick
// if char is not in set; add to set, increment i and compare which is longer ? longest : i - j 
// if char is in set; delete the char in the set using j and then increment j.
// return longest once while loop is done looping

var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let i = 0;
    let j = 0;
    let set = new Set();
    
    while( i < s.length && j < s.length) {
        let char = s[i];
        if (!set.has(char)) {
            set.add(char)
            i++
            longest = Math.max(longest, i - j)
        } else {
            set.delete(s[j])
            j++
        }
    }
    return longest;
};

// time complexity: o(n)