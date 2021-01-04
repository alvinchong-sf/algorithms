const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;;

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
    if(!Array.isArray(arr)) return null;
    var negatives = arr.filter(item => item < 0);
    var negativesSorted = [];
    if(negatives.length) {
        negativesSorted = radixSort(negatives.map(num => Math.abs(num))).reverse().map(num => -num);
    }

    var positives = arr.filter(item => item >= 0);
    let maxDigits = getMaxDigits(positives);

    for(let k = 0; k < maxDigits; k++) {
        let buckets = new Array(10).fill().map( () => new Array());

        for(let i = 0; i < positives.length; i++) {
            let digit = getDigitFrom(positives[i], k);
            buckets[digit].push(positives[i]);
        }
        positives = [].concat(...buckets);
    }
    return negativesSorted.concat(positives)
}

// console.log(radixSort([0, 4, 5, 9, 10, 15, 23, 41, 66, 100]));
// console.log(radixSort([-100, 66, 41, 23, 15, 10, 9, 5, 4, 0]));



module.exports = {
    radixSort
};