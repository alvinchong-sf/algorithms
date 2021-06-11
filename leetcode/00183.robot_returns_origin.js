// 657. Robot Return to Origin

// There is a robot starting at position (0, 0), the origin, on a 2D plane. 
// Given a sequence of its moves, judge if this robot ends up at (0, 0) after it
// completes its moves.
// The move sequence is represented by a string, and the character moves[i] 
// represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). 
// If the robot returns to the origin after it finishes all of its moves, 
// return true. Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant. "R" will always make 
// the robot move to the right once, "L" will always make it move left, etc. 
// Also, assume that the magnitude of the robot's movement is the same for each move.

// Example 1:
// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the 
// ame magnitude, so it ended up at the origin where it started. Therefore, we return true.

var judgeCircle = function(moves) {
    if(moves.length === 1) return false;
    
    let verticalDir = 0;
    let horizontalDir = 0;
    
    for(let i = 0; i < moves.length; i++) {
        let char = moves[i];
        if(char === "U") verticalDir++;
        if(char === "D") verticalDir--;
        if(char === "R") horizontalDir++;
        if(char === "L") horizontalDir--;
    }
    
    return verticalDir === 0 && horizontalDir === 0;
    
};

// time o(n) | space o(1)
// https://leetcode.com/problems/robot-return-to-origin/