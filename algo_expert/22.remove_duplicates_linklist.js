class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
	let currNode = linkedList;
	
  while(currNode) {
		let nextNode = currNode.next;
		while(nextNode && currNode.value === nextNode.value) {
			nextNode = nextNode.next;
		}
		currNode.next = nextNode;
		currNode = nextNode;
	}
  return linkedList;
}

// time o(n)
// space o(1) extra space