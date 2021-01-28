function sunsetViews(buildings, direction) {
	if(!buildings.length) return [];
	let indices = [];
	let currentTallest = -Infinity;
	
	if(direction === "EAST") {
		let lastBuildingIdx = buildings.length - 1;
		let lastBuilding = buildings[lastBuildingIdx];
		indices.push(lastBuildingIdx);
		currentTallest = lastBuilding;
	} else if(direction === "WEST") {
		let firstBuildingIdx = 0;
		let firstBuilding = buildings[firstBuildingIdx];
		indices.push(firstBuildingIdx);
		currentTallest = firstBuilding;
	}
	
	if(direction === "EAST") {
		for(let i = buildings.length - 2; i >= 0; i--) {
			let currentBuilding = buildings[i];
			if(currentBuilding > currentTallest) {
				indices.push(i);
				currentTallest = currentBuilding;
			}
		}
	} else if (direction === "WEST") {
			for(let j = 1; j < buildings.length; j++) {
				let currentBuilding = buildings[j];
				if(currentBuilding > currentTallest) {
					indices.push(j);
					currentTallest = currentBuilding;
				}
			}
	}
	
	return direction === "WEST" ? indices : indices.reverse();
}

// time o(n);
// space o(n);