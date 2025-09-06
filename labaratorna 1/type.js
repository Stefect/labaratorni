'use strict';

// // Функція збільшення для скалярного типу
const inc =(n) => n + 1;

// Функція збільшення для об'єкту (посилального типу)
const incObj = (num) => {
   num.n += 1;
};

// Тест скаляру
const a = 5;
const b = inc(a);
console.dir({ a, b }); // a: 5, b: 6

// Тест посилальний тип
const obj = { n: 5 };
incObj(obj);
console.dir({ obj }); // obj: { n: 6 }
