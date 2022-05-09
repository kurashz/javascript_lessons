"use strict";


console.log('arr' + " - object");
console.log(5 + +"4");

let incr = 10,
    decr = 10;

incr++; // Инкремент на 1 = 11
console.log(incr);
decr--; // Декремент на 1 = 10
console.log(decr);

//Постфиксная и префиксная формы

//Постфиксная

console.log(incr++); // Выведет 10, но на следующем шаге будет = 11.
console.log(decr--); // Выведет 10, но на следующем шаге будет = 9.

//Префиксная формы

console.log(++incr); // Выведет сразу 11
console.log(--decr); // Выведет 9


console.log(5%2); //Остаток от деления

console.log(2*4 == 8); // == Оператор сравнения, выводит true or false (boolean значение)
console.log(2*4 === '8'); // === Строгое сравнение, сравнивает также типы переменных (число = числу строка = строке)


// && - И, || - ИЛИ

const isChecked = false,
      isClose = false;

console.log(isChecked && isClose); // true - только если оба действия равны
console.log(isChecked || isClose);

// ! - ОТРИЦАНИЕ

console.log(isChecked || !isClose);









