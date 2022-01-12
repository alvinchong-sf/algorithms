// Good morning! Here's your coding interview problem for today.

// This problem was asked by Amazon.

// Run-length encoding is a fast and simple method of encoding strings. The basic 
// idea is to represent repeated successive characters as a single count and 
// character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

// Implement run-length encoding and decoding. You can assume the string to be 
// encoded have no digits and consists solely of alphabetic characters. You can 
// assume the string to be decoded is valid.

function compressString(str) {
    let i = 0, j = 0;
    const newArr = [];
    
    while (i < str.length) {
        let count = 0;
        while (str[i] === str[j]) { count++; i++; }
        newArr.push(`${count}${str[j]}`);
        j = i;
    }

    return newArr.join("");
};

const str = "AAAABBBCCDAA";
const res = compressString(str);
console.log(res);

/**
 * 
 *  count = 2
 *  str = "A A A A B B B C C D A A"
 *                                 i
 *                                 j
 *  output = "4A3B2C1D2A"
 *  
 *  
 */