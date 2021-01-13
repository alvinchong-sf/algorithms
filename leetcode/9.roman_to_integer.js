//eg.1
// Input: s = "III"
// Output: 3

// eg.2
// Input: s = "IV"
// Output: 4

// eg.3
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// eg.4
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.




var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    let total = 0;
    
    for(let i = 0; i < s.length; i++) {
        
        let char = s[i];
        let prev = s[i - 1];
        let val = roman[char];
        let prevVal = roman[prev]
        
        if(char === "V" || char === "X") {
            if(prev === "I") {
                total += val - prevVal - prevVal
            } else {
                total += val
            }
        }
        
        if(char === "L" || char === "C") {
            if(prev === "X") {
                total += val - prevVal - prevVal
            } else {
                total += val
            }
        }
        
        if(char === "D" || char === "M") {
            if(prev === "C") {
                total += val - prevVal - prevVal
            } else {
                total += val
            }
        }
        
        if(char === "I") {
            total += val
        }
    }
    
    return total;
};