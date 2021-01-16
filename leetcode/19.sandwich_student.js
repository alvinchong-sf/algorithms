//  Number of Students Unable to Eat Lunch

// The school cafeteria offers circular and square sandwiches at lunch break, 
// referred to by numbers 0 and 1 respectively. All students stand in a queue. 
// Each student either prefers square or circular sandwiches.

// The number of sandwiches in the cafeteria is equal to the number of students. 
// The sandwiches are placed in a stack. At each step:

// If the student at the front of the queue prefers the sandwich on the top of 
// the stack, they will take it and leave the queue.
// Otherwise, they will leave it and go to the queue's end.
// This continues until none of the queue students want to take the top sandwich 
// and are thus unable to eat.

// You are given two integer arrays students and sandwiches where sandwiches[i] 
// is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) 
// and students[j] is the preference of the j​​​​​​th student in the initial queue 
// (j = 0 is the front of the queue). Return the number of students that are 
// unable to eat.


// Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
// Output: 0 

var countStudents = function(students, sandwiches) {
    
    let circular = 0;
    let square = 1;
    let thereAreSandwichesForEveryone = true;
    
    while(thereAreSandwichesForEveryone) {
        let hungryStudent = students[0];
        let mysterySandwich = sandwiches[0];
        
        if (hungryStudent === mysterySandwich) {
            students.shift();
            sandwiches.shift();
            if(!students.length) return 0;
        } else if (students.some((studentChoices) => studentChoices === mysterySandwich)) {
            let pickyStudent = students.shift();
            students.push(pickyStudent);
        } else {
            thereAreSandwichesForEveryone = false;
        }
    }
    
    return students.length;
};


// time: o(n)
// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/