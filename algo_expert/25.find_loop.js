// find the node that started the linked list cycle. Must solve in o(1) extra space

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
	let slow = head;
	let fast = head;
	
	while(fast) {
		slow = slow.next;
		fast = fast.next.next;
		if(slow === fast) {
			slow = head;
			break;
		}
	}
	
	while(slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}
	return fast;
}

// time o(n)
// space o(1)