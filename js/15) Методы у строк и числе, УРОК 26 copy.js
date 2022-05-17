"use strict";

// СВОЙСТВА ЗАДАЮТСЯ ЧЕРЕЗ: .свойство
// МЕТОДЫ ЗАДАЮТСЯ ЧЕРЕЗ: метод()

const str = "teSt";
console.log(str.length); // 4 -  Опеределение кол-ва символов строки
console.log(str[1]); // e - способ получения элемента строки

// Методы строк
console.log(str.toUpperCase()); // TEST
console.log(str.toLowerCase()); // test

const someFruit = "Some Fruit";
console.log(someFruit.indexOf("Fruit")); // 5 - поиск индекса строки indexOf

const logger = "Hello World!";
console.log(logger.slice(2, 4)); // метод вырезания символов стркои 
console.log(logger.slice(6)); // метод вырезания символов стркои 

console.log(logger.substring(2, 4)); // не позволяет использовать отриц. значения, в отличии от slice

//Методы чисел - Math в консоли

const num = 12.2;
console.log(Math.round(num)); // 12 - округление до ближайшего целого

const test = "12.2 px";
console.log(parseInt(test)); // 12 - перевод строки в другую систему исчисления
console.log(parseFloat(test)); // возвращает число из строки с плавающей точкой

const arr = [1, 2, 3];
console.log(arr.length); // 3 -  Опеределение кол-ва элементов внутри массива
