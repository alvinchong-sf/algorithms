// 807. Max Increase to Keep City Skyline

// In a 2 dimensional array grid, each value grid[i][j] represents the height 
// of a building located there. We are allowed to increase the height of any 
// number of buildings, by any amount (the amounts can be different for different 
// buildings). Height 0 is considered to be a building as well. 

// At the end, the "skyline" when viewed from all four directions of the grid, 
// i.e. top, bottom, left, and right, must be the same as the skyline of the 
// original grid. A city's skyline is the outer contour of the rectangles formed 
// by all the buildings when viewed from a distance. See the following example.

// What is the maximum total sum that the height of the buildings can be increased?

// Example:
// Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
// Output: 35
// Explanation: 
// The grid is:
// [ [3, 0, 8, 4], 
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]

// The skyline viewed from top or bottom is: [9, 4, 8, 7]
// The skyline viewed from left or right is: [8, 7, 9, 3]

// The grid after increasing the height of buildings without affecting skylines is:

// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]


var maxIncreaseKeepingSkyline = function(grid) {
    // create 2 empty arr to store max rows and max col
    // make 2 nested loops 
    // first nested loops gets the max rows
    // second nested loops gets the max cols
    // another nested loop this time loop thru the max rows and max cols
    // on each iteration compare the two values and grab the smaller of the two.
    // using the smaller value, subtract with original arr to get the difference
    // create a running sum
    // add the difference to the running sum
    // return the running sum at the end of the iteration
    
    let maxRow = [];
    let maxCol = [];
    
    for(let i = 0; i < grid.length; i++) {
        let max = Math.max(...grid[i]);
        maxRow.push(max);
    }
    
    // let largestCol = -Infinity;
    for(let j = 0; j < grid[0].length; j++) {
        let largestCol = -Infinity;
        let currentLargest = -Infinity;
        for(let i = 0; i < grid.length; i++) {
            currentLargest = grid[i][j];
            if(currentLargest > largestCol) {
                largestCol = currentLargest;
            }
        }
        maxCol.push(largestCol);
    }
    // maxRow = [8,7,9,3]
    // maxCol = [9,4,8,7]
    
    let sum = 0;
    for(let i = 0; i < maxRow.length; i++) {
        for(let j = 0; j < maxCol.length; j++ ) {
            let num1 = maxRow[i];
            let num2 = maxCol[j];
            let small = Math.min(num1, num2);
            let gridVal = grid[i][j];
            sum += (small - gridVal);
        }
    }
    return sum;
};


// time o(n + m);
// space o(n + m);
// https://leetcode.com/problems/max-increase-to-keep-city-skyline/
