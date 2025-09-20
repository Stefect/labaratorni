'use strict';

/**
 * @fileoverview Вправа на роботу з ідентифікаторами у JavaScript
 * @author Your Name
 */

/**
 * Змінна, що містить ім'я користувача
 * @type {string}
 */
let myName = 'Artem';

/**
 * Константа, що містить рік народження
 * @type {number}
 */
const birthYear = 2004;

/**
 * Функція для виводу привітання
 * @param {string} name - Ім'я людини для привітання
 * @returns {void}
 */
const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

// Експортуємо для тестів
module.exports = {
  myName,
  birthYear,
  greeting
};