'use strict';

/**
 * @fileoverview Вправа на роботу з колекціями у JavaScript
 * @author Your Name
 */

/**
 * Телефонна книга у вигляді масиву об'єктів
 * @type {Array<{name: string, phone: string}>}
 */
const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'John Doe', phone: '+380445556677' },
  { name: 'Jane Smith', phone: '+380445559988' }
];

/**
 * Функція пошуку телефону за ім'ям у масиві
 * @param {string} name - Ім'я для пошуку
 * @returns {string|null} Знайдений номер телефону або null
 */
const findPhoneByName = (name) => {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone;
    }
  }
  return null;
};

/**
 * Телефонна книга у вигляді хеш-таблиці (об'єкта)
 * @type {Object.<string, string>}
 */
const phoneHash = {
  'Marcus Aurelius': '+380445554433',
  'John Doe': '+380445556677',
  'Jane Smith': '+380445559988'
};

/**
 * Функція пошуку телефону за ім'ям у хеш-таблиці
 * @param {string} name - Ім'я для пошуку
 * @returns {string|null} Знайдений номер телефону або null
 */
const findPhoneByNameHash = (name) => phoneHash[name] || null;

// Експортуємо для тестів
module.exports = {
  phoneBook,
  findPhoneByName,
  phoneHash,
  findPhoneByNameHash
};