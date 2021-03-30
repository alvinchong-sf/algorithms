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

///////////////////////////////////////////////////////////////////////////////

// brute force logarithmic time complexity 

function findSuccessor(tree, node) {
	// inorder => left -> value -> right
	
	// if no parent,no left and no right 
	if(!node.parent && !node.right && !node.left) return null; // o(1)
	
	// if no left or right, and is left child, we return parent
	if(!node.left && !node.right && node.parent.left === node) return node.parent; // o(1)
	
	// if no left or right, and is right child, we ask if our parent have a parent. if yes we return that grand parent and if not return null
	if(!node.left && !node.right && node.parent.right === node) { // o(1)
		if(node.parent.parent === null) {
			return null
		} else {
			return node.parent.parent
		}
	}
	
	// if no right, and we are left child, return parent
	if(!node.right && node.parent.left === node) return node.parent; // o(1)
	
	// if no right, and we are right child, return null
	if(!node.right && node.parent.right === node) return null;  // o(1)
	
	// if we have left and right, we go right and find the most left child
	if(node.left && node.right) { // o(log(n))
		currentNode = node.right;
		while(currentNode.left) {
			currentNode = currentNode.left
		}
		return currentNode
	}
	
	// if is root and no right
	if(!node.parent && !node.right) return null // o(1)
	
	// if root of tree
	if(!node.parent) return node.right // o(1)
	
}

// time o(log(n))
// space o(1)

///////////////////////////////////////////////////////////////////////////////


function findSuccessor(tree, node) {
	// if single node return null
	if(!node.parent && !node.right) return null;
	
	// if we have right, then traverse to the left most bottom side
	if(node.right) {
		let currentNode = node.right
		while(currentNode.left) {
			currentNode = currentNode.left;
		}
		return currentNode;
	}
	
	// if we have no right, 2 options
	// 1. if we are left child -> return node.parent
	// 2. if we are right child -> return node.parent.parent
	
	if(node.parent.left === node) {
		return node.parent;
	} else if(node.parent.right === node) {
		if(!node.parent.parent) {
			return null;
		} else {
			return node.parent.parent
		}
	}
}

// time o(h) where height of subtree of node
// space o(1) 