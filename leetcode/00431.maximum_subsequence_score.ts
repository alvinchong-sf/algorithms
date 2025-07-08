/*
2542. Maximum Subsequence Score
You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer 
k. You must choose a subsequence of indices from nums1 of length k.
For chosen indices i0, i1, ..., ik - 1, your score is defined as:
    The sum of the selected elements from nums1 multiplied with the minimum of the selected 
    elements from nums2. It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) 
    * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).

Return the maximum possible score.
A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

Example 1:
Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
Output: 12
Explanation: 
The four possible subsequence scores are:
- We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
- We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
- We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
- We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
Therefore, we return the max score, which is 12.

Example 2:
Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
Output: 30
Explanation: 
Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.

Constraints:
    n == nums1.length == nums2.length
    1 <= n <= 105
    0 <= nums1[i], nums2[j] <= 105
    1 <= k <= n

https://leetcode.com/problems/maximum-subsequence-score/
*/

function maxScore(nums1: number[], nums2: number[], k: number): number {
    let currSum = 0;
    let maxScore = 0;
    const pairs: [number, number][] = [];
    const minheap = new MinHeap();

    for (let i = 0; i < nums1.length; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }

    pairs.sort((a, b) => b[1] - a[1]);

    for (const [val1, val2] of pairs) {
        currSum += val1;
        minheap.insert(val1);

        if (minheap.size() === k) {
            maxScore = Math.max(currSum * val2, maxScore);
            const removedNum = minheap.remove() as number;
            currSum -= removedNum;
        }
        
    }

    return maxScore
};

class MinHeap {
    constructor(private heap: number[] = []) {}

    public size() {
        return this.heap.length;
    }

    public insert(num: number): void {
        this.heap.push(num);
        this.siftUp(this.heap.length - 1, this.heap);
    }

    public remove(): number | undefined {
        if (!this.heap.length) return undefined;
        if (this.heap.length === 1) return this.heap.pop();
        this.swap(0, this.heap.length - 1, this.heap);
        const removedNum = this.heap.pop();
        this.siftDown(0, this.heap.length, this.heap)
        return removedNum;
    }

    private siftUp(idx: number, arr: number[]): void {
        if (idx === 0) return;
        let currIdx = idx;
        while (currIdx > 0) {
            const parentIdx = Math.floor((currIdx - 1) / 2);
            if (arr[parentIdx] <= arr[currIdx]) return;
            this.swap(parentIdx, currIdx, arr);
            currIdx = parentIdx;
        }
    }

    private siftDown(idx: number, n: number, arr: number[]): void {
        let currIdx = idx;
        while (currIdx < n) {
            const leftIdx = (currIdx * 2) + 1;
            const rightIdx = (currIdx * 2) + 2;
            const leftNum = leftIdx >= n ? Infinity : arr[leftIdx];
            const rightNum = rightIdx >= n ? Infinity : arr[rightIdx];
            const currNum = arr[currIdx];

            if (currNum <= leftNum && currNum <= rightNum) return;
            const swapIdx = leftNum <= rightNum ? leftIdx : rightIdx;
            this.swap(currIdx, swapIdx, arr);
            currIdx = swapIdx;
        }
    }

    private swap(i: number, j: number, arr: number[]): void {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}