class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function nodeDepths(root) {
	let sum = 0;
	let stack = [{node: root, depth: 0}];
	
	while(stack.length) {
		const {node, depth} = stack.pop();
		sum += depth;
		if(node.right) stack.push({node: node.right, depth: depth + 1});
		if(node.left) stack.push({node: node.left, depth: depth + 1});
	}
	return sum;
}

// time o(n);
// space o(n);