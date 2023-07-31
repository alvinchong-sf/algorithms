// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in 
// ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []
 
// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

// https://leetcode.com/problems/merge-k-sorted-lists/

// Brute Force time o(n log(n)) | space o(n)
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;

    const nums: number[] = [];

    for (const list of lists) {
        let currNode = list;
        while (currNode) {
            nums.push(currNode.val);
            currNode = currNode.next;
        }
    }

    if (!nums.length) return null;

    nums.sort((a, b) => a - b);
    let dummyNode = new ListNode(0);
    let pointer = dummyNode;

    for (const num of nums) {
        const newNode = new ListNode(num);
        pointer.next = newNode;
        pointer = pointer.next;
    }
    
    return dummyNode.next;
};

// Priority Queue (min heap)
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }

 // Time o(n log(k)) | space o(n)
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists.length) return null;
    
    const pq = new ThePriorityQueue();
    let dummyNode = new ListNode(0);
    let pointer = dummyNode;
    
    
    for (const list of lists) {
        let currentNode = list;
        while (currentNode) {
            pq.add(currentNode);
            currentNode = currentNode.next;
        }
    }
    
    if (!pq.minHeap.length) return null;
    
    while (pq.minHeap.length) {
        const num = pq.remove();
        const newNode = new ListNode(num);
        pointer.next = newNode;
        pointer = pointer.next;
    }
    
    return dummyNode.next;
};

class ThePriorityQueue {
    constructor(public minHeap: number[] = []) {}

    add(node: ListNode | null): void {
        if (!node) return;
        this.minHeap.push(node.val);
        this.siftUp(this.minHeap.length - 1);
    }
    
    remove(): number | null {
        if (!this.minHeap.length) return null;
        if (this.minHeap.length === 1) return this.minHeap.pop();
        
        this.swap(0, this.minHeap.length - 1);
        const removeValue = this.minHeap.pop();
        this.siftDown(0);
        
        return removeValue;
    }

    siftUp(idx: number) {
        if (idx === 0) return;
        const parentIdx = Math.floor((idx - 1) / 2);
        const parentVal = this.minHeap[parentIdx];
        const currentVal = this.minHeap[idx];
        
        if (currentVal > parentVal) return;
        
        this.swap(idx, parentIdx);
        this.siftUp(parentIdx);
    }

    siftDown(idx: number): void {
        const leftIdx = (idx * 2) + 1;
        const rightIdx = (idx * 2) + 2;
        const leftVal = leftIdx >= this.minHeap.length ? Infinity : this.minHeap[leftIdx];
        const rightVal = rightIdx >= this.minHeap.length ? Infinity : this.minHeap[rightIdx];
        const currVal = this.minHeap[idx];

        if (currVal < leftVal && currVal < rightVal) return;

        const swapIdx = leftVal < rightVal ? leftIdx : rightIdx;
        this.swap(idx, swapIdx);
        this.siftDown(swapIdx);
    }

    swap(idx1: number, idx2: number): void {
        [this.minHeap[idx1], this.minHeap[idx2]] = [this.minHeap[idx2], this.minHeap[idx1]];
    }
}