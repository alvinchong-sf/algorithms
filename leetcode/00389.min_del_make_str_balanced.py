"""
1653. Minimum Deletions to Make String Balanced
You are given a string s consisting only of characters 'a' and 'b'
You can delete any number of characters in s to make s balanced. s is balanced if there is no
pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.
Return the minimum number of deletions needed to make s balanced.

Example 1:
Input: s = "aababbab"
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").

Example 2:
Input: s = "bbaaaaabb"
Output: 2
Explanation: The only solution is to delete the first two characters.

Constraints:
    1 <= s.length <= 105
    s[i] is 'a' or 'b'

https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/description/
Time: O(n) | Space: O(n)
"""
"""
****NOTE****
This is a trick question. The goal is to delete both 'b' and 'a' when s[i] == 'b' and s[i+1] == 'a'.
But to only keep track as 1 count of deletion. Because if we wanted to find the minimum deletion, 
then it doesn't matter which one we delete. As long as either one of them is deleted, 
then we can increment our counter.

If we have approach this problem using a decision tree, we would always end up with 1 deletion no matter the case.
1. Delete 'b' and leftover string are all b's (Number of character deleted is 1)
2. Delete 'a' and leftover string are all b'a (Number of character deleted is 1)
3. Delete 'a' and leftover string are all 'a's (The deleted number should have been 1 'b' in order to achieve minimum deletion)
4. Delete 'b' and leftover strings are all 'b's (Number of character deleted is 1)
5. Delete either 'a' or 'b' and leftover string are a mix of 'b's and 'a's 
(We delete 1 character based on example 3 or 4 and we repeat the number of deletion for the entire string)
"""
class Solution:
    def minimumDeletions(self, s: str) -> int:
        stack = []
        count = 0
        for c in s:
            if c == "b":
                stack.append(c)
            else:
                if stack and stack[-1] == "b":
                    stack.pop()
                    count += 1
        return count