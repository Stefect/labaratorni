const { average, square, cube, calculate } = require('../labaratorna 2/3-functions');

test('average function calculates arithmetic mean', () => {
  expect(average(2, 4)).toBe(3);
  expect(average(1, 2)).toBe(1.5);
});

test('square function calculates x²', () => {
  expect(square(2)).toBe(4);
  expect(square(3)).toBe(9);
});

test('cube function calculates x³', () => {
  expect(cube(2)).toBe(8);
  expect(cube(3)).toBe(27);
});

test('calculate function returns array of averages', () => {
  const result = calculate();
  expect(Array.isArray(result)).toBe(true);
  expect(result).toHaveLength(10);
});