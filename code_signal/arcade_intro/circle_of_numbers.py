# Consider integer numbers from 0 to n - 1 written down along the circle in such a 
# way that the distance between any two neighboring numbers is equal 
# (note that 0 and n - 1 are neighboring, too).

# Given n and firstNumber, find the number which is written in the radially opposite 
# position to firstNumber.

# Example

# For n = 10 and firstNumber = 2, the output should be
# solution(n, firstNumber) = 7.


# https://app.codesignal.com/arcade/intro/level-7/vExYvcGnFsEYSt8nQ

def solution(n, firstNumber):
    operator = "add" if firstNumber < n/2 else "subtract"
    
    res = 0
    if operator == "add":
        res = firstNumber + (n/2)
    else:
        res = firstNumber - (n/2)
        
    return res

"""
n = 4
    0 <-> 2
    1 <-> 3
    
n = 6
    0 <--> 3
    1 <--> 4
    2 <--> 5
"""
