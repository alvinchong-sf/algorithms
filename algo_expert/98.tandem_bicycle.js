function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	redShirtSpeeds.sort((a, b) => a - b);
	blueShirtSpeeds.sort((a, b) => a - b);
	let totalSpeed = 0;
	const n = blueShirtSpeeds.length;
	
	if (fastest) {
		for (let i = 0; i < redShirtSpeeds.length; i++) {
			const red = redShirtSpeeds[i];
			const blue = blueShirtSpeeds[n - 1 - i];
			totalSpeed += Math.max(red, blue);
		}
	} else {
		for (let i = 0; i < redShirtSpeeds.length; i++) {
			const red = redShirtSpeeds[i];
			const blue = blueShirtSpeeds[i];
			totalSpeed += Math.max(red, blue);
		}
	}
	
	return totalSpeed;
}