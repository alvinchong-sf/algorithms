// 109. Convert Sorted List to Binary Search Tree
// Given the head of a singly linked list where elements are sorted in ascending 
// order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree 
// in which the depth of the two subtrees of every node never differ by more than 1.



//   Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

//   Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedListToBST = function(head) {
    if(!head) return null;
    if(!head.next) return new TreeNode(head.val);
    
    let fast = head;
    let slow = head;
    let prev = null;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    
    const newNode = new TreeNode(slow.val);
    
    prev.next = null;
    newNode.left = sortedListToBST(head);
    newNode.right = sortedListToBST(slow.next);
    return newNode;
};

// o(n) traversing entire linked list
// o(n) creating a new BST

// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/