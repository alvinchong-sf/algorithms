// Baseball Game

// You are keeping score for a baseball game with strange rules. The game consists 
// of several rounds, where the scores of past rounds may affect future rounds' scores.

// At the beginning of the game, you start with an empty record. You are given a 
// list of strings ops, where ops[i] is the ith operation you must apply to the 
// record and is one of the following:

// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is 
// guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed 
// there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is 
// guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.

var calPoints = function(ops) {
    let newArr = [];
    
    for(let i = 0; i < ops.length; i++) {
        let score = ops[i];
        if(score === "C") {
            newArr.pop()
        } else if(score === "D") {
            let double = newArr[newArr.length - 1] * 2;
            newArr.push(double);
        } else if(score === "+") {
            let lastScore = newArr[newArr.length - 1];
            let secondLastScore = newArr[newArr.length - 2];
            let sum = lastScore + secondLastScore;
            newArr.push(sum);
        } else {
            let num = parseInt(score)
            newArr.push(num);
        }
    }
    
    const reducer = (accu, ele) => accu + ele;
    
    return newArr.reduce(reducer);
};


// time: o(n)
// https://leetcode.com/problems/baseball-game/