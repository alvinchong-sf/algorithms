function compare(a, b){
  if(!a && !b) return true;
  if(!a || !b) return false;
  
  if(a.val !== b.val) return false;
  
  const left = compare(a.left, b.left);
  const right = compare(a.right, b.right);
  
  return left && right;
}

// time o(n) | space o(h)
https://www.codewars.com/kata/55847fcd3e7dadc9f800005f/train/javascript