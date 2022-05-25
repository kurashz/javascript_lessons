"use strict";

const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button');
console.log(buttons); // Псевдомассив кнопок с тегом button

// HTMLCollection { 0: button, 1: button, 2: button, 3: button, 4: button, length: 5 }
// 26) Работа с элементами страницы ,Урок 39.js:7:9

const buttons1 = document.getElementsByTagName('button')[1];
console.log(buttons1); // Получение нужного элемента среди массива элементов [Индекс]
const buttons2 = document.getElementsByTagName('button');
console.log(buttons2[1]);


const circles = document.getElementsByClassName('circle');
console.log(circles);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const hearts = document.querySelectorAll('.heart');

const oneHeart = document.querySelector('.heart'); // Первый элемент на странице (див, селектор и тд    )
console.log(oneHeart);