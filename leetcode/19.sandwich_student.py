#  Number of Students Unable to Eat Lunch

# The school cafeteria offers circular and square sandwiches at lunch break, 
# referred to by numbers 0 and 1 respectively. All students stand in a queue. 
# Each student either prefers square or circular sandwiches.

# The number of sandwiches in the cafeteria is equal to the number of students. 
# The sandwiches are placed in a stack. At each step:

# If the student at the front of the queue prefers the sandwich on the top of 
# the stack, they will take it and leave the queue.
# Otherwise, they will leave it and go to the queue's end.
# This continues until none of the queue students want to take the top sandwich 
# and are thus unable to eat.

# You are given two integer arrays students and sandwiches where sandwiches[i] 
# is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) 
# and students[j] is the preference of the j​​​​​​th student in the initial queue 
# (j = 0 is the front of the queue). Return the number of students that are 
# unable to eat.
# https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

# Previous solution in Javascript
# time: o(n^2) | space O(1)
# var countStudents = function(students, sandwiches) {
#     let thereAreSandwichesForEveryone = true;
    
#     while(thereAreSandwichesForEveryone) {
#         let hungryStudent = students[0];
#         let mysterySandwich = sandwiches[0];
        
#         if (hungryStudent === mysterySandwich) {
#             students.shift();
#             sandwiches.shift();
#             if(!students.length) return 0;
#         } else if (students.some((studentChoices) => studentChoices === mysterySandwich)) {
#             let pickyStudent = students.shift();
#             students.push(pickyStudent);
#         } else {
#             thereAreSandwichesForEveryone = false;
#         }
#     }
    
#     return students.length;
# };

# time: o(n) | space O(n) because of importing deque library
from collections import Counter, deque
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        hash_count = Counter(students)
        stud = deque(students)
        sand = deque(sandwiches)

        while stud:
            sandwich_type = sand[0]
            if hash_count[sandwich_type] == 0:
                return len(stud)

            if sand[0] == stud[0]:
                hash_count[stud[0]] -= 1
                stud.popleft()
                sand.popleft()
            else:
                student = stud.popleft()
                stud.append(student)

        return 0