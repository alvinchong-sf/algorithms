//  Reverse Vowels of a String

// Write a function that takes a string as input and reverse only the 
// vowels of a string

// Example 1:
// Input: "hello"
// Output: "holle"

// Example 2:
// Input: "leetcode"
// Output: "leotcede"

var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU";
    let newArr = [];
    let hash = [];
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(vowels.includes(char)) {
            hash.push(char)
        }
    }
    
    for(let j = 0; j < s.length; j++) {
        let char = s[j];
        if(vowels.includes(char)) {
            let lastVowel = hash.pop();
            newArr.push(lastVowel)
        } else {
            newArr.push(char)
        }
    }
    
    return newArr.join("");
};

// time: o(n)