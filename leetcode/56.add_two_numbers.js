// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a 
// single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the 
// number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let currentNode = head;
    let carry = 0;
    let value;
    
    while(l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        value = sum % 10;
        carry = Math.floor(sum / 10);
        currentNode.next = new ListNode(value);
        currentNode = currentNode.next;
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return head.next;
};

// time o(n)
// space o(n)

// https://leetcode.com/problems/add-two-numbers/