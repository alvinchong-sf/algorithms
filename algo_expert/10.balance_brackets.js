function balancedBrackets(string) {
  let stack = [];
	
	for(let i = 0; i < string.length; i++) {
		let char = string[i];
		if(char === "(" || char === "{" || char === "[") {
			stack.push(char);
		} else if(char === ")" || char === "}" || char === "]") {
				let opening = stack.pop();
				if( !(opening + char === "()" || opening + char === "{}" || opening + char === "[]") ) {
					return false;	
				}
		}
	}
	if(stack.length) return false;
	return true;
}

// time o(n);
// space o(n);