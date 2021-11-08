// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const largestPrimeFactor = (num) => {
    for(let i = num; i >= 2; i--) {
        if(num % i === 0 && isPrime(i)) return i;
    }
};

const isPrime = (num) => {
    // const table = new Array(num + 1).fill(true);

    // for(let i = 2; i * i <= num; i++) {
    //     if(table[i] === true) {
    //         for(let j = i; j * i <= num; j++) {
    //             table[j * i] = false;
    //         }
    //     }
    // }
    // return table[num];

    for(let i = num - 1; i >= 2; i--) {
        if(num % i === 0) return false;
    }
    return true;
}
const n = 600851475143;
// const n = 13195;
// console.log(largestPrimeFactor(n));
