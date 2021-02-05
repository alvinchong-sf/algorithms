class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let arr = [];
	helper(root, 0, arr)
	return arr;
}

const helper = (node, sum, arr) => {
	if(!node) return;
	
	let currSum = node.value + sum;
	if(!node.right && !node.left) {
		arr.push(currSum);
		return;
	}
	
	helper(node.left, currSum, arr);
	helper(node.right, currSum, arr);
	
}

// time o(n) traversing thru entire tree, if BST then o(log n)
// space o(n) because of recursive stack and output is an array. if BST then o(log n)