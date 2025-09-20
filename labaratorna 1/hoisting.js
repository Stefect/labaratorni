'use strict';

/**
 * @fileoverview Демонстрація механізму hoisting (підняття) в JavaScript
 * @author Your Name
 */

/**
 * Функція демонструє механізм підняття змінних у JavaScript
 * При виклику функції перший console.log покаже undefined,
 * а другий покаже значення 5
 * @returns {void}
 */
function hoistingDemo() {
    console.log(x); // виведе undefined через механізм підняття
    var x = 5;
    console.log(x); // виведе 5
}

// Викликаємо функцію для демонстрації
hoistingDemo();