// 848. Shifting Letters
// You are given a string s of lowercase English letters and an integer array 
// shifts of the same length.

// Call the shift() of a letter, the next letter in the alphabet, (wrapping around 
//     so that 'z' becomes 'a').

// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
// Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.

// Return the final string after all such shifts to s are applied.

 

// Example 1:
// Input: s = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation: We start with "abc".
// After shifting the first 1 letters of s by 3, we have "dbc".
// After shifting the first 2 letters of s by 5, we have "igc".
// After shifting the first 3 letters of s by 9, we have "rpl", the answer.

// time o(n) | space o(n)
var shiftingLetters = function(s, shifts) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const { hash, size } = alphabetToHash(alphabet);
    const newArr = s.split("");
    let counter = 0;
    
    for (let i = shifts.length - 1; i >= 0; i--) {
        const num = shifts[i],
              char = newArr[i],
              oldIdx = hash[char],
              newIdx = (oldIdx + num + counter) % size,
              newChar = alphabet[newIdx];
        newArr[i] = newChar;
        counter += num;
    }
    
    return newArr.join("");
};

const alphabetToHash = (alphabet) => {
    const hash = {}
    const size = alphabet.length;
    
    for (let i = 0; i < alphabet.length; i++) {
        const char = alphabet[i];
        hash[char] = i;
    }
    
    return { hash, size }
}