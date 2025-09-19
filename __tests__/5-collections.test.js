const {
  phoneBook,
  findPhoneByName,
  phoneHash,
  findPhoneByNameHash
} = require('../labaratorna 2/5-collections');

test('phoneBook should be an array of objects', () => {
  expect(Array.isArray(phoneBook)).toBe(true);
  expect(phoneBook[0]).toHaveProperty('name');
  expect(phoneBook[0]).toHaveProperty('phone');
});

test('findPhoneByName should find phone number in array', () => {
  const phone = findPhoneByName('Marcus Aurelius');
  expect(phone).toBe('+380445554433');
});

test('phoneHash should be an object', () => {
  expect(typeof phoneHash).toBe('object');
  expect(phoneHash['Marcus Aurelius']).toBe('+380445554433');
});

test('findPhoneByNameHash should find phone number in hash', () => {
  const phone = findPhoneByNameHash('Marcus Aurelius');
  expect(phone).toBe('+380445554433');
});