"use strict"; // Когда она находится в начале скрипта, весь сценарий работает в «современном» режиме.
//Типы переменных

//изменяемя переменная

let number = 5;

var name = 'Alex'; // может быть использована до того, как объявлена.

/* Пример:
console.log(name);
var name = 'Vadim');

Результат - undefinde

*/

//константа

const leftBorderWidth = 1;

number = 10;
console.log(number);

//объекты - изменяемы

const obj = {
    a: 50,
};

obj.a = 10;
console.log(obj);