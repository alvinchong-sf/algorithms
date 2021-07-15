// minWaste = [0, 3]
// [ [3,5,7], [6,8,9], [3,5,6] ]
//           i j
// requirements = [4,6,6,7]
//                         k
// currWaste = 1

// [[0,3],[0,5],[0,7],[1,6],[1,8],[1,9],[2,3],[2,5],[2,6]]
//                                                    i
// requirements.sort((a, b) => a - b);
// arr = [[3,5,7],[6,8,9],[3,5,6]]
// for loop markings
    // tempArr = [3,5,6]
    // if markings[0] === arr.length; tempArr.push(markings[1])
    // else arr.push(tempArr.slice()); tempArr = []; tempArr.push(markings[0])

// arr.push(tempArr.slice())

// minWaste = [-1, Infinity] // minWaste[0] = idx; minWaste[1] = waste
// maxReq = requirements[requirements.length - 1];
// for(i = 0; i < arr.length; i++) 
    // j = 0, k = 0
    // currWaste = 0     
    // while j < arr[i].length && k < requirements.length
        // marking = arr[i][j]
        // requirement = requirements[k]
        // if(marking >= requirement) 
            // waste = marking - requirement
            // currWaste += waste
            // k++
        // else 
            // j++
    
    // if(currWaste < minWaste[1]) 
        // minWaste[1] = currWaste
        // minWaste[0] = i

// return minWaste[1]

const chooseFlask = (markings, requirements) => {
    requirements.sort((a, b) => a - b);
    const arr = [];
    for(const marking of markings) {
        let tempArr = [];
        if(marking[0] === arr.length) {
            tempArr.push(marking[1])
        } else {
            arr.push(tempArr.slice());
            tempArr = [];
            tempArr.push(marking[1])
        }
    }
    arr.push(tempArr.slice());

     const minWaste = [-1, Infinity];
     const maxReq = requirements[requirements.length - 1];

    for(let i = 0; i < arr.length; i++) {
        let j = 0, k = 0, currWaste = 0;
        const subArr = arr[i]
        const largestMarking = subArr[subArr.length - 1];
        if(maxReq > largestMarking) continue;
        
        while(j < arr[i].length && k < requirements.length) {
            const marking = arr[i][j];
            const requirement = requirements[k];
            if(marking >= requirement) {
                const waste = marking - requirement;
                currWaste += waste;
                k++;
            } else {
                j++;
            }
        }

        if(currWaste < minWaste[1]) {
            minWaste[1] = currWaste;
            minWaste[0] = i;
        }
    }
    return minWaste[1];
}

// for(i = 0; i < arr.length; i++) 
    // j = 0, k = 0
    // currWaste = 0     
    // while j < arr[i].length && k < requirements.length
        // marking = arr[i][j]
        // requirement = requirements[k]
        // if(marking >= requirement) 
            // waste = marking - requirement
            // currWaste += waste
            // k++
        // else 
            // j++
    
    // if(currWaste < minWaste[1]) 
        // minWaste[1] = currWaste
        // minWaste[0] = i

// return minWaste[1]