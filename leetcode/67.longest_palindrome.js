// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the 
// length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome 
// here.

var longestPalindrome = function(s) {
    // the idea of forming a palindrome can come from incrementing a count
    // use a set to keep track of unique characters
    // if we iterate thru the string and seen that character again, then it is its own palindrome
    // so we can increment our count by 2 and delete it off from the set
    // when we finish the iteration, the count should represent the length of our string of palindromes
    // becase "baccab" => count will be 6 because we seen b c and a twice so we increment it
    // lastly check if the set has any character left. if there is , in order to max the palindrome size
    // we can include 1 charcater in the middle "baczcab"; therefore add one
    
    let set = new Set();
    let counter = 0;
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(!set.has(char)) {
            set.add(char)
        } else {
            counter += 2;
            set.delete(char);
        }
    }
    
    if(set.size > 0) {
        return counter + 1;
    } else {
        return counter;
    }
};

// time o(n)
// space o(n)

// https://leetcode.com/problems/longest-palindrome/