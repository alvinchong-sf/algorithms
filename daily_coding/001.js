// 12 / 10 / 21

// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

const addTwoNum = (arr, k) => {
    const set = new Set();

    for (const num of arr) {
        const res = k - num;
        if (set.has(res)) {
            return true;
        } else {
            set.add(num);
        }
    }

    return false;
}

const arr = [10, 15, 3, 7], k = 17;

console.log(addTwoNum(arr, k));