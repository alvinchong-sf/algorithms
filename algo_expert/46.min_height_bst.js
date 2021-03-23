class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function minHeightBst(array) {
	if(!array.length) return null;
	let midIdx = Math.floor(array.length / 2);
	let midPos = array[midIdx];
	
	let newNode = new BST(midPos);
	let leftArr = array.slice(0, midIdx);
	let rightArr = array.slice(midIdx + 1);
	newNode.left = minHeightBst(leftArr);
	newNode.right = minHeightBst(rightArr);
	return newNode;
}

// time o(n) traversing thru all the nodes
// space o(n) because of the slice array