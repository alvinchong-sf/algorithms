// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a 
// ingle digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the 
// number 0 itself.

var addTwoNumbers = function(l1, l2) {
    const d = new ListNode();
    let curr = d;
    let carry = 0;
    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum / 10 | 0;
        curr.next = new ListNode(sum % 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        curr = curr.next;
    }
    return d.next;
}

// https://leetcode.com/problems/add-two-numbers/