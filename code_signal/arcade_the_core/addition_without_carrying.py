# A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.

# Given two integers, your task is to find the result that the child will get.

# Note: The child had learned from this site, so feel free to check it out too if you 
# are not familiar with column addition.

# Example

# For param1 = 456 and param2 = 1734, the output should be
# solution(param1, param2) = 1180.

#    456
#   1734
# + ____
#   1180
# The child performs the following operations from right to left:

# 6 + 4 = 10 but the child forgets about carrying the 1 and just writes down the 0 in the
# last column
# 5 + 3 = 8
# 4 + 7 = 11 but the child forgets about the leading 1 and just writes down 1 under 4 and 7.
# There is no digit in the first number corresponding to the leading digit of the second one, 
# so the child imagines that 0 is written before 456. Thus, they get 0 + 1 = 1.

def solution(param1, param2):
    result = []
    
    while param1 or param2:
        digit1 = param1 % 10
        digit2 = param2 % 10
        
        remainder = (digit1 + digit2) % 10
        result.append(str(remainder))
        
        param1 //= 10
        param2 //= 10
    
    return int("".join(reversed(result))) if len(result) else 0

# Typescript solution
# function solution(param1: number, param2: number): number {
#     const result: string[] = [];
    
#     while (param1 || param2) {        
#         const digit1 = param1 % 10;
#         const digit2 = param2 % 10;
        
#         const remainder = (digit1 + digit2) % 10;
#         result.push(remainder.toString());
        
#         param1 = Math.floor(param1 / 10);
#         param2 = Math.floor(param2 / 10);
#     }
    
#     return result.length ? parseInt(result.reverse().join("")) : 0
# }