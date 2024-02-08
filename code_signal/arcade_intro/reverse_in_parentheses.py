# Write a function that reverses characters in (possibly nested) parentheses in the 
# input string.

# Input strings will always be well-formed with matching ()s.

# Example

# For inputString = "(bar)", the output should be
# solution(inputString) = "rab";
# For inputString = "foo(bar)baz", the output should be
# solution(inputString) = "foorabbaz";
# For inputString = "foo(bar)baz(blim)", the output should be
# solution(inputString) = "foorabbazmilb";
# For inputString = "foo(bar(baz))blim", the output should be
# solution(inputString) = "foobazrabblim".
# Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

# Return inputString, with all the characters that were in parentheses reversed.
# https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

def solution(inputString):
    result = []
    n = len(inputString)
    i = 0
    while i < n:
        char = inputString[i]
        if char == "(":
            end_idx = getEndIndex(i, inputString, n)
            reversed_array = helper(i+1, end_idx, inputString, n)
            result.append("".join(reversed_array))
            i = end_idx
        elif char == ")":
            i += 1
            continue
        else:
            result.append(char)
            i += 1
        
    return "".join(result)

def helper(start, end, inputString, n):
    if start > n or end > n:
        return []
    reverse_arr = []
    i = start
    while i < end:
        char = inputString[i]
        if char == "(":
            end_idx = getEndIndex(i, inputString, n)
            result = helper(i+1, end_idx, inputString, n)
            reverse_arr += result
            i = end_idx
        elif char == ")":
            i += 1
            continue
        else:
            reverse_arr.append(char)
            i += 1
    
    list_reversed = list(reversed(reverse_arr))
    return list_reversed
    
    
def getEndIndex(start_idx, inputString, n):
    open_parentheses = 1
    close_parentheses = 0
    i = start_idx + 1
    
    while i < n and open_parentheses != close_parentheses:
        if inputString[i] == "(":
            open_parentheses += 1
        
        if inputString[i] == ")":
            close_parentheses += 1
        
        i += 1
        
    return i
