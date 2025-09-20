'use strict';

/**
 * @fileoverview Вправа на роботу з циклами у JavaScript
 * @author Your Name
 */

/**
 * Функція для створення масиву чисел з заданого діапазону
 * @param {number} start - Початкове число діапазону
 * @param {number} end - Кінцеве число діапазону
 * @returns {number[]} Масив чисел від start до end включно
 */
const range = (start, end) => {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
};

/**
 * Функція для створення масиву непарних чисел з заданого діапазону
 * @param {number} start - Початкове число діапазону
 * @param {number} end - Кінцеве число діапазону
 * @returns {number[]} Масив непарних чисел від start до end включно
 */
const rangeOdd = (start, end) => {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      numbers.push(i);
    }
  }
  return numbers;
};

// Експортуємо для тестів
module.exports = {
  range,
  rangeOdd
};