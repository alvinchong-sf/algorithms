// 125. Valid Palindrome
// Given a string s, determine if it is a palindrome, considering only 
// alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    const set = new Set();
    
    for(let i = 0; i < alphabet.length; i++) {
        set.add(alphabet[i])
    }
    let arr = [];
    
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(set.has(char.toLowerCase())) {
            arr.push(char.toLowerCase())
        }
    }
    
    if(arr.length === 1) return true;
    let i = 0;
    let j = arr.length - 1;
    
    while(i < j) {
        if(arr[i] !== arr[j]) {
            return false;
        }
        i++; j--;
    }
    return true;
    
};

// time o(2n + m) => o(n + m) linear
// space o(n + m) -> result arr increase as input increases

var isPalindrome = function(s) {
    // A man, a plan, a canal: Panama
    //                 ij
    
    
    // implementation
    // aschii = "abcdefghijklmnopqrstuvwxyz0123456789"
    // make aschii into a set;
    // i = 0; j = s.length - 1 
    // if s[i].toLowerCase() !== s[j].toLowerCase() and within the ASCII boundaries; => return false
    // if s[i] || s[j] !== ASCII; while loop to keep going until one of them reaches an ASCII; i++;j--
    // At the end of (i < j) => return true; 
    
    // const set = new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"]);
    const aschii = "abcdefghijklmnopqrstuvwxyz0123456789";
    const set = new Set();
    
    for(let i = 0; i < aschii.length; i++) {
        set.add(aschii[i]);
    };
    
    
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        if(set.has(s[i].toLowerCase()) && set.has(s[j].toLowerCase())) {
            if(s[i].toLowerCase() !== s[j].toLowerCase()) return false;
             i++; j--;
        } else {
            while(!set.has(s[i].toLowerCase()) && i < j) i++;
            while(!set.has(s[j].toLowerCase()) && i < j) j--;
        }
    }
    return true;
};

// time o(n + m)
// space o(m)

// https://leetcode.com/problems/valid-palindrome/