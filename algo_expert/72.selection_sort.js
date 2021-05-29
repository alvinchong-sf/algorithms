function selectionSort(array) {		
  for(let i = 0; i < array.length - 1; i++) {		
			
		let smallest = Infinity;									
		let smallestIdx = null;										
		for(let j = i + 1; j < array.length; j++) {
			if(array[j] < smallest) {
				smallest = array[j];
				smallestIdx = j;
			}
		}
		
		if(smallest < array[i]) {
			[ array[i], array[smallestIdx] ] = [ array[smallestIdx], array[i]]
		}
	}
	return array;
}

// time o(n^2) | space o(1)