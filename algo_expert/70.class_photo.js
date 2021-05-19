function classPhotos(redShirtHeights, blueShirtHeights) {
  let sortedRed = redShirtHeights.sort((a, b) => a - b);
  let sortedBlue = blueShirtHeights.sort((a, b) => a - b);
	
	if(sortedRed[0] === sortedBlue[0]) return false;
	
	let backRowStudents = sortedRed[0] > sortedBlue[0] ? sortedRed : sortedBlue;
	let frontRowStudents = sortedRed[0] < sortedBlue[0] ? sortedRed : sortedBlue;
	
	for(let i = 0; i < backRowStudents.length; i++) {
		let taller = backRowStudents[i];
		let shorter = frontRowStudents[i];
		if(shorter > taller) return false
	}
	
	return true;
}

// time o(n log(n))
// space o(1)