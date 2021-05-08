
// 445. Add Two Numbers II

// You are given two non-empty linked lists representing two non-negative integers. 
// The most significant digit comes first and each of their nodes contains a single 
// digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]

var addTwoNumbers = function(l1, l2) {
    let arr1 = []; // [7,2,4,3]
    let arr2 = []; // [5,6,4]
    let node1 = l1;
    let node2 = l2;
    
    while(node1) {
        arr1.push(node1.val);
        node1 = node1.next;
    }
    
    while(node2) {
        arr2.push(node2.val);
        node2 = node2.next;
    }
    
    let carry = 0;             
    let i = arr1.length - 1;    // i = -1
    let j = arr2.length - 1;    // j = -2
    let resultArr = [];
    
    while(i >= 0 || j >= 0) {
        let num1 = arr1[i] !== undefined ? arr1[i] : 0; // num1 = 7
        let num2 = arr2[j] !== undefined ? arr2[j] : 0; // num2 = 0
        
        let sum = num1 + num2 + carry; // sum = 7
        
        let lastDigit = sum % 10;     // lastDigit = 7
        carry = Math.floor(sum / 10); // carry = 0
        let newVal = new ListNode(lastDigit); // newVal = {7}
        resultArr.unshift(newVal);
        i--; j--;
    }

    if(carry > 0) resultArr.unshift(new ListNode(carry));
    for(let k = 0; k < resultArr.length - 1; k++) {
        if(k === resultArr.length - 1) {
            resultArr[k].next = null;
            break;
        }
        resultArr[k].next = resultArr[k + 1];
    }
    return resultArr[0];
};

// time o(n + m)
// space o(n + m)
// https://leetcode.com/problems/add-two-numbers-ii/