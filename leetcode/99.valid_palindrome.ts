// 125. Valid Palindrome
// Given a string s, determine if it is a palindrome, considering only 
// alphanumeric characters and ignoring cases.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Time O(n) | Space O(1)
// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
    const arr: string[] = [];
    const t1 = "a".charCodeAt(0);
    const t2 = "z".charCodeAt(0);
    const t3 = "0".charCodeAt(0);
    const t4 = "9".charCodeAt(0);

    for (const c of s) {
        const val = c.toLowerCase().charCodeAt(0);
        if ((val >= t1 && val <= t2) || (val >= t3 && val <= t4)) arr.push(c.toLowerCase())
    }

    let left = 0, right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) return false;
        left++; right--;
    }
    return true;
};