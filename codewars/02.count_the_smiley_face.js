function countSmileys(arr) {
  let count = 0;
  let hash = {
    eyes: [":", ";"],
    nose: ["~", "-"],
    mouth: [")", "D"]
  }
  
  for(let i = 0; i < arr.length; i++) {
    let face = arr[i];
    if(hash["eyes"].includes(face[0])) {
      if(hash["nose"].includes(face[1])) {
        if(hash["mouth"].includes(face[2])) {
          count++;
        }
      } else if (hash["mouth"].includes(face[1])) {
        count++;
      }
    }
  }
  return count;
}


// time o(n)
// space o(n)

// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript