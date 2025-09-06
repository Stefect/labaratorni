'use strict';

// Скалярний тип даних
const inc =(n) => n + 1;

// Силочний тип даних
const incObj = (num) => {
   num.n += 1;
};

// Тест скаляру
const a = 5;
const b = inc(a);
console.dir({ a, b }); // a: 5, b: 6

// Тест силочного типу даних 
const obj = { n: 5 };
incObj(obj);
console.dir({ obj }); // obj: { n: 6 }
