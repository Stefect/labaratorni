'use strict';

/**
 * @fileoverview Демонстрація різниці між скалярними та посилальними типами в JavaScript
 * @author Your Name
 */

/**
 * Функція збільшення для скалярного типу
 * @param {number} n - Число для збільшення
 * @returns {number} Збільшене на 1 число
 */
const inc = (n) => n + 1;

/**
 * Функція збільшення для об'єкту (посилального типу)
 * @param {Object} num - Об'єкт з властивістю n
 * @returns {void}
 */
const incObj = (num) => {
   num.n += 1;
};

// Тест скалярного типу
const a = 5;
const b = inc(a);
console.dir({ a, b }); // a: 5, b: 6

// Тест посилального типу
const obj = { n: 5 };
incObj(obj);
console.dir({ obj }); // obj: { n: 6 }
