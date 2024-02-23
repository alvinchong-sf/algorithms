// Consider two following representations of a non-negative integer:

// A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;
// An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between # characters, 
// and preceded by the base, which can only be a number between 2 and 16 in the first representation. 
// For digits from 10 to 15 characters a, b, ..., f and A, B, ..., F are used.
// Additionally, both representations may contain underscore (_) characters; they are used only as 
// separators for improving legibility of numbers and can be ignored while processing a number.

// Your task is to determine whether the given string is a valid integer representation.

// Note: this is how integer numbers are represented in the programming language Ada.

// Example

// For line = "123_456_789", the output should be
// solution(line) = true;
// For line = "16#123abc#", the output should be
// solution(line) = true;
// For line = "10#123abc#", the output should be
// solution(line) = false;
// For line = "10#10#123ABC#", the output should be
// solution(line) = false;
// For line = "10#0#", the output should be
// solution(line) = true;
// For line = "10##", the output should be
// solution(line) = false.
// Input/Output

// [execution time limit] 5 seconds (ts)

// [memory limit] 1 GB

// [input] string line

// A non-empty string.

// Guaranteed constraints:
// 2 ≤ line.length ≤ 30.

// [output] boolean

// true if line is a valid integer representation, false otherwise.

// https://app.codesignal.com/arcade/code-arcade/well-of-integration/Ghe6HWhFft8h6fR49/

interface HashMap {
    [key: string]: string;
}

function constructHashMap(): HashMap {
    return {
        "2": "01",
        "3": "012",
        "4": "0123",
        "5": "01234",
        "6": "012345",
        "7": "0123456",
        "8": "01234567",
        "9": "012345678",
        "10": "0123456789",
        "11": "0123456789Aa",
        "12": "0123456789ABab",
        "13": "0123456789ABCabc",
        "14": "0123456789ABCDabcd",
        "15": "0123456789ABCDEabcde",
        "16": "0123456789ABCDEFabcdef",
    }
}

function solution(line: string): boolean {
    const n = line.length;
    const hashMap = constructHashMap();

    const numHashes = countHashes(line);
    if (numHashes > 2 || numHashes === 1) return false;
    if (numHashes === 0) {
        if (!hasAtLeastOneNumber(line, hashMap)) return false
        return validateNumber(line, 10, hashMap);
    }
    
    const [idx1, idx2] = getHashesIdx(line, n);
    if (idx2 + 1 < n) return false;
    
    const result = getBaseAndNumber(line, idx1, idx2, hashMap);
    if (result === false) return false;

    const { baseNumber, lineNumberString } = result;
    return validateNumber(lineNumberString, baseNumber, hashMap);
}

function countHashes(line: string): number {
    let count = 0;
    
    for (const str of line) {
        if (str === "#") count += 1
    }
    
    return count;
}

function hasAtLeastOneNumber(line: string, hashMap: HashMap): boolean {
    let oneNumber = false;
    const integerStrings = hashMap['10'];
    for (const str of line) {
        if (integerStrings.includes(str)) oneNumber = true;
    }
    
    return oneNumber;
}

function validateNumber(line: string, base: number, hashMap: HashMap): boolean {
    if (base < 2 || base > 16) return false;
    
    const validStr = hashMap[base.toString()] + "_";
    for (const strNum of line) {
        if(!validStr.includes(strNum)) return false;
    }
    
    return true;
}

function getHashesIdx(line: string, n: number): [number, number] {
    let idx1 = -1, idx2 = -1;
    let hasIdx1Seen = false;
    
    for (let i = 0; i < n; i++) {
        const str = line[i]
        if (str === "#" && !hasIdx1Seen) {
            idx1 = i;
            hasIdx1Seen = true
        } else if (str === "#" && hasIdx1Seen) {
            idx2 = i;
        }
    }
    
    return [idx1, idx2];
}

function getBaseAndNumber(line: string, idx1: number, idx2: number, hashMap: HashMap): false | { baseNumber: number, lineNumberString: string } {
    
    const integerStrings = hashMap['10'];
    const combinations = hashMap['16'];

    const baseArr = _getBaseAndNumber(line, 0, idx1 - 1, integerStrings);
    if (baseArr === false) return false;
    
    const lineArr = _getBaseAndNumber(line, idx1 + 1, idx2 - 1, combinations);
    if (lineArr === false) return false;
    
    const baseNumber = parseInt(baseArr.join(""))
    const lineNumberString = lineArr.join("");
    
    return { baseNumber, lineNumberString };
}

function _getBaseAndNumber(line: string, idx1: number, idx2: number, validStr: string): false | string[] {
    const arr: string[] = [];

    for (let i = idx1; i <= idx2; i++) {
        const char = line[i];
        if (char === "_") continue;
        if (!validStr.includes(char)) return false;
        arr.push(char);
    }

    return !arr.length ? false : arr;
}