class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// [10, 4, 2, 1, 5, 17, 19, 18]

//               10
//             4    [17,19,18]
//           2  5
//         1

function reconstructBst(preOrderTraversalValues) {
	if(!preOrderTraversalValues.length) return null;
	const rootVal = preOrderTraversalValues[0];         // 1
	const newNode = new BST(rootVal);
	let findRightIdx = Infinity;
	
	for(let i = 1; i < preOrderTraversalValues.length; i++) {
		let num = preOrderTraversalValues[i];
		if(num >= rootVal) {
			findRightIdx = i;
			break;
		}
	}
	
	let leftArr = preOrderTraversalValues.slice(1, findRightIdx); 
	let rightArr = preOrderTraversalValues.slice(findRightIdx)  
	newNode.left = reconstructBst(leftArr);
	newNode.right = reconstructBst(rightArr);
	return newNode;
}

// time o(n^2)
// space o(n)

