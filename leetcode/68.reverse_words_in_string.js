// 557. Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a 
// sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"


var reverseWords = function(s) {
    let resultArr = [];
    
    s.split(" ").forEach(word => {
        resultArr.push(reverses(word));
    })
    
    return resultArr.join(" ");
};

const reverses = (str) => {
    let arr = str.split("");
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join("");
}

// time o(n^2)
// space o(n);
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

