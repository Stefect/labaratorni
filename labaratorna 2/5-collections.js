'use strict';

// Task 1: Phone book using array of objects
const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'John Doe', phone: '+380445556677' },
  { name: 'Jane Smith', phone: '+380445559988' }
];

// Task 2: Find phone by name using array
const findPhoneByName = (name) => {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone;
    }
  }
  return null;
};

// Task 3: Phone book using hash table (object)
const phoneHash = {
  'Marcus Aurelius': '+380445554433',
  'John Doe': '+380445556677',
  'Jane Smith': '+380445559988'
};

// Task 4: Find phone by name using hash
const findPhoneByNameHash = (name) => phoneHash[name] || null;

// Exporting for tests
module.exports = {
  phoneBook,
  findPhoneByName,
  phoneHash,
  findPhoneByNameHash
};