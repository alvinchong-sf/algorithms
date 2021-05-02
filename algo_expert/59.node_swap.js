class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function nodeSwap(head) {
	if(!head || !head.next) return head;
	
	let dummyHead = new LinkedList("dummy");
	let pointer = dummyHead;
	let currNode = head;
	while(currNode && currNode.next) {
		let nextNode = currNode.next.next;
		pointer.next = currNode.next;
		pointer.next.next = currNode;
		currNode = nextNode;
		pointer = pointer.next.next;
		pointer.next = currNode;
	}
	return dummyHead.next;
}

// time o(n)
// space o(1)