class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
	// traverse the tree using inorder approach
	// inorder => left -> value -> right
	// put them all in an arrayy
	// iterate thru the array and return i + 1

	// time o(n) || space o(n) linear time and space
	
	let resultArr = [];
	inOrder(tree, resultArr);
	for(let i = 0; i < resultArr.length; i++) {
		if(resultArr[i] === node) return resultArr[i + 1]
	}
	return null;
}

const inOrder = (node, array) => {
	if(!node) return;
	if(node.left) inOrder(node.left, array);
	array.push(node);
	if(node.right) inOrder(node.right, array);
}

// time o(2n) => o(n)
// space o(2n) => o(n)
