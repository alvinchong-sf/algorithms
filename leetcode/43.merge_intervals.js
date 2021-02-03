// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all 
// overlapping intervals, and return an array of the non-overlapping intervals 
// that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

var merge = function(intervals) {
   intervals.sort((a, b) => a[0] - b[0])
    let result = [];
	let min = intervals[0][0];
	let max = intervals[0][1];
	
	for(let i = 1; i < intervals.length; i++){
		let start = intervals[i][0];
		let end = intervals[i][1];
		
        if(start >= min && start <= max) {
            max = Math.max(max, end)
        } else {
            result.push([min, max]);
            min = start;
            max = end;
        }
    }
    
    result.push([min, max])
    return result;

};

// time o(n log(n)) because of the sort.
// space o(n) because of result array
// https://leetcode.com/problems/merge-intervals/