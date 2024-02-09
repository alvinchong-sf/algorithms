# Given a string, find the shortest possible string which can be achieved by adding 
# characters to the end of initial string to make it a palindrome.

# Example

# For st = "abcdc", the output should be
# solution(st) = "abcdcba".

def solution(st): 
    chars = list(st)
    result = st + "".join(list(reversed(chars)))

    while len(chars):
        chars.pop()
        new_str = st + "".join(list(reversed(chars)))
        res = is_palindrome(new_str)
        if res:
            result = new_str

    return result

def is_palindrome(s):
    i, j = 0, len(s)-1
    while i < j:
        if s[i] != s[j]:
            return False

        i += 1
        j -= 1

    return True