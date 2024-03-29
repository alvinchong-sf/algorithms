// Bracket Match
// A string of brackets is considered correctly matched if every opening bracket 
// in the string can be paired up with a later closing bracket, and vice versa. 
// For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. 
// For instance, “((” could become correctly matched by adding two closing 
// brackets at the end, so you’d return 2.

// Given a string that consists of brackets, write a function bracketMatch that 
// takes a bracket string as an input and returns the minimum number of brackets 
// you’d need to add to the input in order to make it correctly matched.
// Explain the correctness of your code, and analyze its time and space complexities.

// Examples:
// input:  text = “(()”
// output: 1

// input:  text = “(())”
// output: 0

// input:  text = “())(”
// output: 2


// time o(n) | space o(1)
function bracketMatch(text) {
  let opening = 0, count = 0;
  
  for (let i = 0; i < text.length; i++) {
    const ele = text[i];
    if (ele === "(") {
      opening++;
    } else if (ele === ")" && opening === 0) {
      count++;
    } else {
      opening--;
    }
  }
  
  return opening > 0 ? opening + count : count;
}


// time o(n) | space o(n)
function bracketMatch(text) {
    const stack = [text[0]];
  
  for (let i = 1; i < text.length; i++) {
    if (!stack.length) {
      stack.push(text[i]);
      continue;
    }
    const first = stack.pop();
    const second = text[i];
    
    if (first === "(" && second === ")") {
      continue;
    } else {
      stack.push(first);
      stack.push(second);
    }
  }
  
  return stack.length; 
}