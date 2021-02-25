class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
	let head = new LinkedList(0);    // 0
	let newList = head;              // 0 -> (9)
	let carry = 0;                   // 0
	let value;                       // 0
	
	while(linkedListOne && linkedListTwo) {
		value = (linkedListOne.value + linkedListTwo.value + carry) % 10;
		carry = Math.floor((linkedListOne.value + linkedListTwo.value + carry) / 10);
		newList.next = new LinkedList(value);
		newList = newList.next;
		linkedListOne = linkedListOne.next; // 0
		linkedListTwo = linkedListTwo.next; // null
	}
	while(linkedListOne) {
		value = (linkedListOne.value + carry) % 10;
		carry = Math.floor((linkedListOne.value + carry) / 10);
		newList.next = new LinkedList(value);
		newList = newList.next;
		linkedListOne = linkedListOne.next; // 
	}
	while(linkedListTwo) {
		value = (linkedListTwo.value + carry) % 10;
		carry = Math.floor((linkedListTwo.value + carry) / 10);
		newList.next = new LinkedList(value);
		newList = newList.next;
		linkedListTwo = linkedListTwo.next;
	}
	if(carry > 0) {
		newList.next = new LinkedList(carry);
		newList = newList.next;
	}
	return head.next;
}

// time o(n + m);
// space o(n + m);