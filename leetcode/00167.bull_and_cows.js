// 299. Bulls and Cows

// You are playing the Bulls and Cows game with your friend.

// You write down a secret number and ask your friend to guess what the number is. 
// When your friend makes a guess, you provide a hint with the following info:

// The number of "bulls", which are digits in the guess that are in the correct position.
// The number of "cows", which are digits in the guess that are in your secret number 
// but are located in the wrong position. Specifically, the non-bull digits in 
// the guess that could be rearranged such that they become bulls.
// Given the secret number secret and your friend's guess guess, return the hint 
// for your friend's guess.

// The hint should be formatted as "xAyB", where x is the number of bulls and y is 
// the number of cows. Note that both secret and guess may contain duplicate digits.

// Input: secret = "1123", guess = "0111"
// Output: "1A1B"
// Explanation: Bulls are connected with a '|' and cows are underlined:
// "1123"        "1123"
//   |      or     |
// "0111"        "0111"
// Note that only one of the two unmatched 1s is counted as a cow since the non-bull 
// digits can only be rearranged to allow one 1 to be a bull.

var getHint = function(secret, guess) {
    let resultArr = [0, "A", 0, "B"];
    
    let hash = {};
    
    for(let i = 0; i < secret.length; i++) {
        let num = secret[i];
        if(hash[num] === undefined) hash[num] = 0;
        hash[num]++;
    }

    // bulls
    for(let i = 0; i < guess.length; i++) {
        let guessNum = guess[i];
        let secretNum = secret[i];
        if(guessNum === secretNum) {
            resultArr[0]++;
            hash[guessNum]--;
        }
    }

    // cows
    for(let i = 0; i < guess.length; i++) {
        let guessNum = guess[i];
        if(guess[i] === secret[i]) continue;
        if(hash[guessNum] > 0) {
            hash[guessNum]--;
            resultArr[2]++;
        }
    }
    // console.log(hash)
    return resultArr.join("");
};

// time o(n) | space o(n)
// https://leetcode.com/problems/bulls-and-cows/