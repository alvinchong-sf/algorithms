// The new "Avengers" movie has just been released! There are a lot of people at 
// the cinema box office standing in a huge line. Each of them has a single 100, 
// 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every 
// single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has 
// no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with 
// the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine){
  const cashRegister = {25: 0, 50: 0, 100: 0};
  
  for (const bill of peopleInLine) {
    if (bill === 50) {
      if (cashRegister[25] > 0) {
        cashRegister[25]--;
      } else {
        return "NO";
      }
    } else if (bill === 100) {
      if (cashRegister[50] > 0 && cashRegister[25] > 0) {
        cashRegister[50]--; cashRegister[25]--;
      } else if (cashRegister[25] >= 3) {
        cashRegister[25] -= 3;
      } else {
        return "NO";
      }
    }
    cashRegister[bill]++;
  }
  
  return "YES";
};

// time o(n) | space o(1)
// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript