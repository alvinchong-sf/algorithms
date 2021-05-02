class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// time o(n) | space o(1) 
function rearrangeLinkedList(head, k) {
	// notes
	// smaller head = 0
	// smaller tail = 0
	// 0->5->2->1->4
	// 0->2->1->4
	// equal head = 3
	// equal tail = 3
	// larger head = 5
	// larger tail = 5
	
	// 3->0->5->2->1->4
	//                c
	// 0->2->1->3->5->4
	
	// implementation
	// currNode = head; => while (currNode)
	
	// if(currNode.val < k) => do something
	// if(head && tail === null) head && tail = currNode
	// if(head) tail.next = currNode; then tail = currNode
	// 0->2->1
	
	// if(currNode.val === k) => do something
	// if(currNode.val > k) => do something
	// smallerTail.next = equalHead
	// equalTail.next = largerHead
	// largerHead.next = null
	// return smallerHead;
	
	if(!head || !head.next) return head;
	
	let smallerHead = null;
	let smallerTail = null;
	let equalHead = null;
	let equalTail = null;
	let largerHead = null;
	let largerTail = null;
	
	let currNode = head;
	while(currNode) {
		if(currNode.value < k) {
			if(!smallerHead && !smallerTail) {
				smallerHead = currNode;
				smallerTail = currNode;
			} else {
				smallerTail.next = currNode;
				smallerTail = smallerTail.next;
			}
		} else if(currNode.value === k) {
				if(!equalHead && !equalTail) {
					equalHead = currNode;
					equalTail = currNode;
				} else {
					equalTail.next = currNode;
					equalTail = equalTail.next;
				}
		} else if(currNode.value > k){
				if(!largerHead && !largerTail) {
					largerHead = currNode;
					largerTail = currNode;
				} else {
					largerTail.next = currNode;
					largerTail = largerTail.next;
				}
		}
		currNode = currNode.next;
	}
	// no smaller only equal and larger
	// no equal only smaller and larger
	// no larger only smaller and equal
	// no smaller and no equal only larger
	// no no smaller and no larger only equal
	// no equal and no larger only smaller
	
	// if have everything
	if(smallerHead && equalHead && largerHead) {
		smallerTail.next = equalHead;
		equalTail.next = largerHead;
		largerTail.next = null;
		return smallerHead;
	} // no smaller only equal and larger
	else if (equalHead && largerHead) {
		equalTail.next = largerHead;
		largerTail.next = null
		return equalHead;
	} // no equal only smaller and larger
	else if (smallerHead && largerHead) {
		smallerTail.next = largerHead;
		largerTail.next = null;
		return smallerHead;
	} // no larger only smaller and equal
	else if (smallerHead && equalHead) {
		smallerTail.next = equalHead;
		equalTail.next = null;
		return smallerHead
	} // no smaller and no equal only larger
	else if(largerHead) {
		largerTail.next = null
		return largerHead;
	} // no no smaller and no larger only equal
	else if(equalHead) {
		equalTail.next = null
		return equalHead;
	} // no equal and no larger only smaller
	else if(smallerHead) {
		smallerTail.next = null;
		return smallerHead;
	}
	
	
	// smallerTail.next = equalHead;
	// equalTail.next = largerHead;
	// largerTail.next = null;
	// return smallerHead;
}

// time o(n)
// space o(1)