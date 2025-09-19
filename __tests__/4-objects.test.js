const { fn, createUser } = require('../labaratorna 2/4-objects');

test('fn function returns modified object', () => {
  const result = fn();
  expect(result).toHaveProperty('name');
});

test('createUser function creates correct user object', () => {
  const user = createUser('Marcus Aurelius', 'Roma');
  expect(user).toEqual({
    name: 'Marcus Aurelius',
    city: 'Roma'
  });
});