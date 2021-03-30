class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
	if(!tree) return true;
	
	let left = getHeight(tree.left);
	let right = getHeight(tree.right);
	let diff = Math.abs(left - right);
	let bool = diff <= 1;
	return bool && heightBalancedBinaryTree(tree.left) && heightBalancedBinaryTree(tree.right);
}

const getHeight = (node) => {
	if(!node) return null;
	let left = getHeight(node.left);
	let right = getHeight(node.right);
	return 1 + Math.max(left, right);
}

// time o(n)
// space o(n) if tree is balanced then space is o(h) if not balance o(n)