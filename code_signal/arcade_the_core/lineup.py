# To prepare his students for an upcoming game, the sports coach decides to try some new 
# training drills. To begin with, he lines them up and starts with the following warm-up 
# exercise: when the coach says 'L', he instructs the students to turn to the left. 
# Alternatively, when he says 'R', they should turn to the right. Finally, when the coach 
# says 'A', the students should turn around.

# Unfortunately some students (not all of them, but at least one) can't tell left from 
# right, meaning they always turn right when they hear 'L' and left when they hear 'R'. 
# The coach wants to know how many times the students end up facing the same direction.

# Given the list of commands the coach has given, count the number of such commands after 
# which the students will be facing the same direction.

# Example

# For commands = "LLARL", the output should be
# solution(commands) = 3.

# https://app.codesignal.com/arcade/code-arcade/loop-tunnel/8rqs3BLpdKePhouQM/solutions

# optimal
def solution(commands):
    same_direction = True
    count = 0
    
    for command in commands:
        if command == "L" or command == "R":
            same_direction = not same_direction
        
        if same_direction: 
            count += 1
            
    return count

# brute force
def solution(commands):
    count = 0
    regular = 0
    opposite = 0
    
    for command in commands:
        if command == "L":
            regular -= 90
            opposite += 90
        elif command == "R":
            regular += 90
            opposite -= 90
        else:
            regular += 180
            opposite += 180
        
        if regular < 0:
            regular += 360
            
        if opposite < 0:
            opposite += 360
            
        if regular >= 360:
            regular -= 360
            
        if opposite >= 360:
            opposite -= 360

        if regular == opposite:
            count += 1
    
    return count    