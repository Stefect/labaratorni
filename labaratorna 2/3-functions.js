'use strict';

// Task 1: Average function
const average = (a, b) => (a + b) / 2;

// Task 2: Square function
const square = (x) => x * x;

// Task 3: Cube function
const cube = (x) => x * x * x;

// Task 4: Calculate function with nested calls
const calculate = () => {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const squareResult = square(i);
    const cubeResult = cube(i);
    results.push(average(squareResult, cubeResult));
  }
  return results;
};

// Exporting for tests
module.exports = {
  average,
  square,
  cube,
  calculate
};