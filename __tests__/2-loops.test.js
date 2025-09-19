const { range, rangeOdd } = require('../labaratorna 2/2-loops');

test('range function returns array of numbers from 15 to 30', () => {
  const result = range(15, 30);
  expect(result).toHaveLength(16);
  expect(result[0]).toBe(15);
  expect(result[result.length - 1]).toBe(30);
});

test('rangeOdd function returns array of odd numbers from 15 to 30', () => {
  const result = rangeOdd(15, 30);
  expect(result.every(num => num % 2 !== 0)).toBe(true);
  expect(result[0]).toBe(15);
  expect(result).toContain(29);
});