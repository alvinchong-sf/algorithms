// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome.

var isPalindrome = function(head) {
    let arr = [];
    let currentNode = head;
    while(currentNode) {
        arr.push(currentNode);
        currentNode = currentNode.next;
    }
    let i = 0;
    let j = arr.length - 1;
    while(i < j) {
        if(arr[i].val !== arr[j].val) return false;
        i++;
        j--;
    }
    return true;
};

// brite force approach
// time o(n) + o(1/2n) => o(n)
// space o(n)

////////////////////////////////////////////////////////////////////////////

var isPalindrome = function(head) {
    let slow = head;
	let fast = head;
	while(fast && fast.next) {                 // o(1/2n)
		slow = slow.next;
		fast = fast.next.next;
	}
	let pal = reverseList(slow);              // o(n)
	
	let first = head;
	let second = pal;
	while(first && second) {                  // o(1/2n)
		if(first.val !== second.val) return false;
		first = first.next;
		second = second.next;
	}
	return true;
};

var reverseList = function(head) { 
    let prevNode = null;                      
    let currentNode = head;                   
    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;    
        currentNode = nextNode;
    }
    return prevNode;
};

// time o(n) + o(1/2n) + o(1/2n) => o(2n) => o(n)
// space o(1) 

//https://leetcode.com/problems/palindrome-linked-list/