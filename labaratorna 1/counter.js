'use strict';

/**
 * @fileoverview Програма для підрахунку кількості елементів різних типів у масиві
 * @author Your Name
 */

/**
 * Масив з різними типами даних для тестування
 * @type {Array<any>}
 */
const array = [
    true, 'hello', 5, 12, -200, false, false, 'world',
    null, undefined, Symbol('test'), 42n, {test : 1}, 
    [], new Date(), /test/, new Map(), new Set()
];

/**
 * Об'єкт для підрахунку кількості елементів кожного типу
 * @type {Object.<string, number>}
 */
const typeCounts = {};

// Перебираємо масив та рахуємо кількість елементів кожного типу
for (const item of array) {
    const type = typeof item;
    typeCounts[type] = (typeCounts[type] || 0) + 1;
}

// Виводимо результат підрахунку
console.dir(typeCounts);