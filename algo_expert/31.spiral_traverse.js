function spiralTraverse(array) {
  let newArr = [];
	let startingRow = 0;
	let endingRow = array.length - 1;
	let startingCol = 0;
	let endingCol = array[0].length - 1;
	
	while(startingRow <= endingRow && startingCol <= endingCol) {
		for(let col = startingCol; col <= endingCol; col++) {
			newArr.push(array[startingRow][col]);
		}
		
		for(let row = startingRow + 1; row <= endingRow; row++) {
			newArr.push(array[row][endingCol]);
		}
		
		for(let col = endingCol - 1; col >= startingCol; col--) {
			if(startingRow === endingRow) break;
			newArr.push(array[endingRow][col])
		}
		
		for(let row = endingRow - 1; row > startingRow; row--) {
			if(startingCol === endingCol) break;
			newArr.push(array[row][startingCol])
		}
		
		startingRow++;
		endingRow--;
		startingCol++;
		endingCol--;
	}
	return newArr;
}
// time o(n);
// space o(n)