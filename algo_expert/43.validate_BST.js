class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
	return helper(tree, -Infinity, Infinity);
};

function helper(node, min, max) {
	if(!node) return true;
	if(node.value >= max || node.value < min) return false;
	let left = helper(node.left, min, node.value);
	let right = helper(node.right, node.value, max);
	return left && right;
};

// time o(n)
// space o(d) d = depth