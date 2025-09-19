'use strict';

// Task 1: Variable with name
let myName = 'Artem';

// Task 2: Constant with birth year
const birthYear = 2004;

// Task 3: Greeting function
const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

// Exporting for tests
module.exports = {
  myName,
  birthYear,
  greeting
};