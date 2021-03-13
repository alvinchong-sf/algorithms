// In this kata you are required to, given a string, replace every letter 
// with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15
//  3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  // create an empty array to push indices of alphabets in
  // create a string of alphabets
  // on every iteration check alphabet with its alpha index using indexOf
  // push into array
  // finally return join array
  
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let resultArr = [];
  
  for(let i = 0; i < text.length; i++) {          // o(n)
    let char = text[i];
    if(alpha.includes(char.toLowerCase())) {      // o(m)
      let findIdx = alpha.indexOf(char.toLowerCase()); // o(m)
      resultArr.push(findIdx + 1);
    }
  }
  return resultArr.join(" "); // o(n)    
}

// brute force
// time => o(n * m^2 + n) => o(n * m^2)
// space => o(n)
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

////////////////////////////////////////////////////////////////////////////////

function alphabetPosition(text) {
    // create array to push results in
    // create alpha string again like above
    // iterate thru alpha string and build hash map set its key as alpha and value as index + 1
    // iterate thru the text and check for inclusion in hash map
    // if includes, push value into result arr
    // finally return result arr join
  
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let hash = {};                                        // o(1) space
  
  for(let i = 0; i < alpha.length; i++) {               // o(m)
    let char = alpha[i];
    if(hash[char] === undefined) hash[char] = i + 1;
  }
  
  let resultArr = [];                                   // o(n) space
  
  for(ele of text) {                                    // o(n)
    let lowerC = ele.toLowerCase();
    if(hash[lowerC]) resultArr.push(hash[lowerC]);
  }
  return resultArr.join(" ");                         // o(n) 
}

// time o(n + m)
// space o(n)
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript