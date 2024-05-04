/*
295. Find Median from Data Stream
The median is the middle value in an ordered integer list. If the size of the list is even, 
there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the 
actual answer will be accepted.
 
Example 1:
Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

Constraints:
-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.
*/

class MedianFinder {
    constructor(
        private smallHeap: GenericHeap = new GenericHeap("max"),
        private largeHeap: GenericHeap = new GenericHeap("min"),
    ) {}

    addNum(num: number): void {
        this.smallHeap.add(num);
        const maxSmall = this.smallHeap.peak();
        const minLarge = this.largeHeap.peak();
        if (maxSmall > minLarge) {
            const removedNum1 = this.smallHeap.remove();
            const removedNum2 = this.largeHeap.remove();
            this.largeHeap.add(removedNum1);
            this.smallHeap.add(removedNum2);
        }

        const smallSize = this.smallHeap.getHeap().length;
        const largeSize = this.largeHeap.getHeap().length;
        if (smallSize - largeSize > 1) {
            const removedNum = this.smallHeap.remove();
            this.largeHeap.add(removedNum);
        }
    }

    findMedian(): number {
        const smallSize = this.smallHeap.getHeap().length;
        const largeSize = this.largeHeap.getHeap().length;
        const num1 = this.smallHeap.peak();
        const num2 = this.largeHeap.peak();
        if (smallSize === largeSize) {
            return (num1 + num2) /  2
        } else if (smallSize > largeSize) {
            return num1;
        } else {
            return num2;
        }
    }
}

class GenericHeap {
    constructor(
        public readonly type: string,
        private readonly heap: number[] = [],
    ) {}

    public getHeap(): number[] {
        return this.heap;
    }

    public peak(): number {
        return !this.heap.length ? (this.type === "max" ? -Infinity : Infinity) : this.heap[0];
    }

    public add(num: number): void {
        this.heap.push(num);
        this.siftup(this.heap, this.heap.length - 1);
    }

    public remove(): number {
        if (!this.heap.length) return (this.type === "max" ? -Infinity : Infinity);
        if (this.heap.length === 1) return this.heap.pop();

        this.swap(this.heap, 0, this.heap.length - 1);
        const removedNum = this.heap.pop();
        this.siftdown(this.heap, this.heap.length, 0);

        return removedNum;
    }

    private siftdown(arr: number[], n: number, idx: number): void {
        const leftIdx = (idx * 2) + 1;
        const rightIdx = (idx * 2) + 2;
        const leftVal = leftIdx >= n ? (this.type === "max" ? -Infinity : Infinity) : arr[leftIdx];
        const rightVal = rightIdx >= n ? (this.type === "max" ? -Infinity : Infinity) : arr[rightIdx];
        const currVal = arr[idx];

        if (this.type === "max") {
            if (currVal >= leftVal && currVal >= rightVal) return;
        } else {
            if (currVal <= leftVal && currVal <= rightVal) return;
        }

        let swapIdx = -1;
        if (this.type === "max") {
            if (leftVal >= rightVal) {
                swapIdx = leftIdx;
            } else {
                swapIdx = rightIdx;
            }
        } else {
            if (leftVal <= rightVal) {
                swapIdx = leftIdx;
            } else {
                swapIdx = rightIdx;
            }
        }
        this.swap(arr, swapIdx, idx);
        this.siftdown(arr, n, swapIdx);
    }

    private siftup(arr: number[], idx: number): void {
        if (idx === 0) return;
        const parentIdx = Math.floor((idx - 1) / 2);
        const parentVal = arr[parentIdx];
        const currVal = arr[idx];

        if (this.type === "max") {
            if (parentVal >= currVal) return;
        } else {
            if (parentVal <= currVal) return;
        }

        this.swap(arr, idx, parentIdx);
        this.siftup(arr, parentIdx);
    }

    private swap(arr: number[], i: number, j: number): void {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}