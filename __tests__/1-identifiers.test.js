const { myName, birthYear, greeting } = require('../labaratorna 2/1-identifiers');

test('myName should be a string', () => {
  expect(typeof myName).toBe('string');
});

test('birthYear should be a number', () => {
  expect(typeof birthYear).toBe('number');
});

test('greeting function should exist', () => {
  expect(typeof greeting).toBe('function');
});