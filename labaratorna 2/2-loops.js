'use strict';

// Task 1: Range function [15, 30]
const range = (start, end) => {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
};

// Task 2: RangeOdd function for odd numbers [15, 30]
const rangeOdd = (start, end) => {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      numbers.push(i);
    }
  }
  return numbers;
};

// Exporting for tests
module.exports = {
  range,
  rangeOdd
};