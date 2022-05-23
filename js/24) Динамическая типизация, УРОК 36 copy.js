"use strict";

// Динамическая типизация - возможность одного типа данных превращаться в другой тип данных

/*

Число в строку
строка в число 

*/

// TO STRING 1 - устарел:
console.log(typeof(String(null))); // string - превратила null в строку
console.log(String(4)); // строка 4 

// TO STRING 2 Конкотенация - сложение строки с чем-то. При сложении со строкой - получаем строку!
console.log(typeof(5 + '')); // string

const num = 5;
console.log('https://vk.com/catalog/' + num); // https://vk.com/catalog/5

const fontSize = 26 + 'px';
console.log(fontSize); // 26px

// TO NUMBER 1 - устарел:
console.log(typeof(Number('5'))); // number - превратил строку в число

// TO NUMBER 2 - унарный +:
console.log(typeof(+'5')); // number

// TO NUMBER 3 - методы:

console.log(typeof(parseInt('15px', 10))); //number
console.log(parseInt('15px', 10 /*Система исчисления*/)); //number

let answer = +prompt('Введите число:',''); 

// TO BOLEAN 1:

0, '', null, undefined, NaN; // = false

let switcher = null;
if (switcher) {
    console.log('Working...');
}
switcher = 1;
if (switcher) {
    console.log('Working...'); 
}

// TO BOLEAN 2:
console.log(typeof(Boolean('4'))); // boolean
 
// TO BOLEAN 3:
console.log(typeof(!!"444")); // boolean
