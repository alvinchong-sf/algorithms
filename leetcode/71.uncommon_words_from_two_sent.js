// 884. Uncommon Words from Two Sentences

// We are given two sentences A and B.  (A sentence is a string of space 
//     separated words.  Each word consists only of lowercase letters.)

// A word is uncommon if it appears exactly once in one of the sentences, 
// and does not appear in the other sentence.

// Return a list of all uncommon words. 

// You may return the list in any order.

// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]

var uncommonFromSentences = function(A, B) {
    let hash = {};
    let resultArr = [];
    
    A.split(" ").forEach(word => {
        if(hash[word] === undefined) hash[word] = 0;
        hash[word]++;
    })
    B.split(" ").forEach(word => {
        if(hash[word] === undefined) hash[word] = 0;
        hash[word]++;
    })
    for(const [word, freq] of Object.entries(hash)) {
        if(freq === 1) resultArr.push(word);
    }
    
    return resultArr;
};

// time o(n)
// space o(n)

// https://leetcode.com/problems/uncommon-words-from-two-sentences/