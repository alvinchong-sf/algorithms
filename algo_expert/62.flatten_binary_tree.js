class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function flattenBinaryTree(root) {
  let arr = [];
	inOrder(root, arr);
	
	if(arr.length === 1){
		arr[0].left = null;
		arr[0].right = null;
		return arr[0]
	}
	
	for(let i = 0; i < arr.length; i++) {
		if(i === 0) {
			arr[0].left = null;
		} else {
			arr[i].left = arr[i - 1];
		}
		if(i === arr.length - 1) {
			arr[i].right = null
		} else {
			arr[i].right = arr[i + 1]
		}
	}
	return arr[0]
}

const inOrder = (root, arr) => {
	if(!root) return null;
	inOrder(root.left, arr);
	arr.push(root);
	inOrder(root.right, arr);
}

// time o(n) | space o(n)
