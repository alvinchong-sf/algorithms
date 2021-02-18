function findClosestValueInBst(tree, target) {
    // traverse thru either depth first or breadth first
	// set a variable call smallestDiff to keep track of smallest difference
	// set a variable call smallestNode to keep track of smallest node
	// on each traversal we take the difference between current node and target
	// we then compare the current difference with smallest difference
	// we then update the smallest difference accordingly
	
	let stack = [tree];
	let smallestDiff = Infinity;
	let smallestNode = null;
	
	while(stack.length) {
		let currNode = stack.pop();
		let currDiff = Math.abs(currNode.value - target);
		if(currDiff < smallestDiff) {
			smallestDiff =  currDiff;
			smallestNode = currNode.value;
		}
		if(currNode.right) stack.push(currNode.right);
		if(currNode.left) stack.push(currNode.left);
	}
	return smallestNode;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}