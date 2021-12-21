// 12/ 21/ 21

// Good morning! Here's your coding interview problem for today.

// This problem was asked by Apple.

// Implement a job scheduler which takes in a function f and an integer n, 
// and calls f after n milliseconds.

const jobScheduler = (f, n) => {
    setTimeout(f, n);
};

const f = () => {
    const str = "I am running"
    return str;
};

console.log(jobScheduler(f, 1000));

