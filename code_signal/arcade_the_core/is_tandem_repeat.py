# Determine whether the given string can be obtained by one concatenation of some string 
# to itself.

# Example

# For inputString = "tandemtandem", the output should be
# solution(inputString) = true;
# For inputString = "qqq", the output should be
# solution(inputString) = false;
# For inputString = "2w2ww", the output should be
# solution(inputString) = false.

# https://app.codesignal.com/arcade/code-arcade/book-market/2SDWWyHY9Xw5CpphY

def solution(inputString):
    n = len(inputString)
    if n == 2:
        return True if inputString[0] == inputString[1] else False
    
    for i in range(n-2):
        for j in range(i+1, n-1):
            sub_str = inputString[i:j+1]
            m = j - i + 1
            if sub_str * 2 == inputString:
                return True
    
    return False