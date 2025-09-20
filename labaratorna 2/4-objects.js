'use strict';

/**
 * @fileoverview Вправа на роботу з об'єктами у JavaScript
 * @author Your Name
 */

/**
 * Функція демонструє різницю між const та let при роботі з об'єктами
 * @returns {Object} Модифікований об'єкт
 */
const fn = () => {
  // Створюємо об'єкт з константним посиланням
  const constObject = { name: 'John' };
  
  // Створюємо об'єкт зі змінним посиланням
  let varObject = { name: 'John' };
  
  // Модифікуємо властивості (працює для обох об'єктів)
  constObject.name = 'Peter';
  varObject.name = 'Peter';
  
  // Перепризначення посилання (працює тільки для varObject)
  varObject = { name: 'James' };
  
  // Не можемо перепризначити constObject, бо це константа:
  // constObject = { name: 'James' }; // Це викличе помилку
  
  return varObject;
};

/**
 * Функція для створення об'єкта користувача
 * @param {string} name - Ім'я користувача
 * @param {string} city - Місто користувача
 * @returns {Object} Об'єкт користувача з властивостями name та city
 */
const createUser = (name, city) => ({
  name,
  city
});

// Експортуємо для тестів
module.exports = {
  fn,
  createUser
};