'use strict';

// Демонстрація механізму підняття змінних
function hoistingDemo() {
    console.log(x); // виведе undefined через механізм підняття
    var x = 5;
    console.log(x); // виведе 5
}
// Викликаємо функцію для демонстрації
hoistingDemo();