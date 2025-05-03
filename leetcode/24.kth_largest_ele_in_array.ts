/*
215. Kth Largest Element in an Array
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

Constraints:
    1 <= k <= nums.length <= 105
    -104 <= nums[i] <= 104

https://leetcode.com/problems/kth-largest-element-in-an-array/description/
Time: O(n log(k)) | Space: O(k)
*/

function findKthLargest(nums: number[], k: number): number {
    if (k === 1) return Math.max(...nums);
    if (k === nums.length) return Math.min(...nums)
    const minheap = new MinHeap();
    for (const num of nums) {
        minheap.add(num);
        while (minheap.size() > k) {
            minheap.remove();
        }
    }
    return minheap.peek() as number;
};

class MinHeap {
    constructor(private heap: number[] = []) {}

    public peek(): number | null {
        if (!this.heap.length) return null;
        return this.heap[0];
    }

    public size(): number {
        return this.heap.length;
    }

    public add(num: number): void {
        this.heap.push(num);
        this.siftUp(this.heap.length - 1, this.heap)
    }

    public remove(): number | null {
        if (!this.heap.length) return null;
        if (this.heap.length === 1) return this.heap.pop() as number;
        this.swap(0, this.heap.length - 1, this.heap);
        const removedNum = this.heap.pop();
        this.siftDown(0, this.heap.length, this.heap);
        return removedNum as number;
    }

    private siftUp(idx: number, nums: number[]): void {
        let currIdx = idx;
        while (currIdx > 0) {
            const parentIdx = Math.floor((currIdx - 1) / 2);
            if (nums[parentIdx] <= nums[currIdx]) break;
            this.swap(parentIdx, currIdx, nums);
            currIdx = parentIdx;
        }
    }

    private siftDown(idx: number, n: number, nums: number[]): void {
        let currIdx = idx;
        while (true) {
            const leftIdx = (currIdx * 2) + 1;
            const rightIdx = (currIdx * 2) + 2;
            const leftNum = leftIdx >= n ? Infinity : nums[leftIdx];
            const rightNum = rightIdx >= n ? Infinity : nums[rightIdx];
            const currNum = nums[currIdx];

            if (leftNum >= currNum && rightNum >= currNum) break;

            const swapIdx = leftNum <= rightNum ? leftIdx : rightIdx;
            this.swap(swapIdx, currIdx, nums);
            currIdx = swapIdx;
        }
    }

    private swap(i: number, j: number, nums: number[]): void {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
}