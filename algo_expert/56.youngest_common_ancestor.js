class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  //    			A
	// 			B				C
	// 		D   E    F   G
	//   H I
	// d1 = E => B => A => Null
	// d2 = I => D => B => A => Null
	// a1 = [B,A] B      step = 3
	// a2 = [D,B,A] B
	let node1 = descendantOne;
	let node2 = descendantTwo;
	while(node1.name !== node2.name) {
		if(node1.ancestor === null) {
			node1 = descendantTwo;
		} else {
			node1 = node1.ancestor;
		}
		if(node2.ancestor === null) {
			node2 = descendantOne
		} else {
			node2 = node2.ancestor;
		}
	}
	return node1
}

// time o(h)
// space o(1)