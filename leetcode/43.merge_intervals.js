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