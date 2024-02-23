// You have a long strip of paper with integers written on it in a single line from left to right. 
// You wish to cut the paper into exactly three pieces such that each piece contains at least one 
// integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. 
// each initial number will unambiguously belong to one of the pieces after cutting. How many ways can 
// you do it?

// It is guaranteed that the sum of all elements in the array is divisible by 3.

// Example

// For a = [0, -1, 0, -1, 0, -1], the output should be
// solution(a) = 4.

// Here are all possible ways:

// [0, -1] [0, -1] [0, -1]
// [0, -1] [0, -1, 0] [-1]
// [0, -1, 0] [-1, 0] [-1]
// [0, -1, 0] [-1] [0, -1]
// Input/Output

// [execution time limit] 5 seconds (ts)

// [memory limit] 1 GB

// [input] array.integer a

// Guaranteed constraints:
// 5 ≤ a.length ≤ 104,
// -108 ≤ a[i] ≤ 108.

// [output] integer

// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

// TODO: time limit exceeded, need to improve time complexity faster than O(n^3)
function solution(a: number[]): number {
    const n = a.length;
    const sum = a.reduce((accu, num) => accu + num);
    const value = sum / 3;
    let count = 0, sum1 = 0, sum2 = 0, sum3 = 0;
    
    for (let i = 0; i < n - 2; i++) {
        const num1 = a[i];
        sum1 += num1;
        if (sum1 === value) {
            sum2 = 0;
            for (let j = i + 1; j < n - 1; j++) {
                const num2 = a[j];
                sum2 += num2;
                if (sum2 === value) {
                    sum3 = 0;
                    for (let k = j + 1; k < n; k++) {
                        const num3 = a[k];
                        sum3 += num3;
                    }
                    if (sum3 === value) count++;
                }
            }
        }
    }
    return count;
}
