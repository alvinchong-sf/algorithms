// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array 
// of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

var longestCommonPrefix = function(strs) {
    // notes
    // longest prefix is just as long as the shortest word in the strs array
    
    // implementation
    // first loop; find shortest word
    // stack = [f,l]
    // shortest = "flow"
    //                 i
    // strs.every(word => word[i] === shortest[i]);
    // if true; stack.push(shortest[i])
    // if false; continue;
    // return stack.join("")
    
    // edge cases
    // none at the moment
    
    // time o(n * m) n is the length of shortest word in strs array; m is the length of strs array
    // space o(n) 
    
    if(!strs.length) return "";
    
    let shortest = strs[0];
    for(const word of strs) {
        if(word.length < shortest.length) {
            shortest = word;
        }
    }
    
    let stack = [];   
    
    for(let i = 0; i < shortest.length; i++) {
        let char = shortest[i];
        let bool = strs.every(word => word[i] === char);
        if(bool) {
            stack.push(char)
        } else {
            return stack.join("");
        }
    }
    return stack.join("");
    
};

// https://leetcode.com/problems/longest-common-prefix/