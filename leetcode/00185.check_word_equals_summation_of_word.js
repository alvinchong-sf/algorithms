// Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
// Output: true
// Explanation:
// The numerical value of firstWord is "acb" -> "021" -> 21.
// The numerical value of secondWord is "cba" -> "210" -> 210.
// The numerical value of targetWord is "cdb" -> "231" -> 231.
// We return true because 21 + 210 == 231.

var isSumEqual = function(firstWord, secondWord, targetWord) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const firstArr = [];
    const secondArr = [];
    const thirdArr = [];
    
    for(let i = 0; i < firstWord.length; i++) {
        const char = firstWord[i];
        const idx = alphabet.indexOf(char);
        firstArr.push(idx);
    }
    
    for(let j = 0; j < secondWord.length; j++) {
        const char = secondWord[j];
        const idx = alphabet.indexOf(char);
        secondArr.push(idx);
    }
    
    for(let k = 0; k < targetWord.length; k++) {
        const char = targetWord[k];
        const idx = alphabet.indexOf(char);
        thirdArr.push(idx);
    }
    
    const num1 = parseInt(firstArr.join(""));
    const num2 = parseInt(secondArr.join(""));
    const num3 = parseInt(thirdArr.join(""));
    
    return num1 + num2 === num3;
    
};

// time o(n + m + w)
// space o(n + m + w)
// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/