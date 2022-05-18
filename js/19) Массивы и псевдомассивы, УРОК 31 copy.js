"use strict";

const arr = [11, 2, 3, 4, 5];
console.log(arr);


// Методы для работы с массивами
// arr.shift(); //shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
// console.log(arr); 

// arr.pop(); // Удаляет последний элемент массива // [1, 2, 3, 4]
// arr.push(14); // Добавляет последний элемент массива // // [1, 2, 3, 4, 14]
// console.log(arr); 

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}
// аналогично 
for (let value in arr) {
    // console.log(arr[value]);
}

const arr2 = [11, 2, 3, 4, 5];

arr2.forEach(function (item, i, arr2) {
    // console.log(`${i}: ${item} внутри массива ${arr2}`);
});


//Метод Split

// Мы пишем приложение для обмена сообщениями, и посетитель вводит имена тех, кому его отправить, через запятую: Вася, Петя, Маша. Но нам-то гораздо удобнее работать с массивом имён, чем с одной строкой. Как его получить? Метод str.split(delim) именно это и делает. Он разбивает строку на массив по заданному разделителю delim.

// const str = prompt('?');
// const product = str.split(', ');
// console.log(product);

// Метод Join

// Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.

const str = prompt('?');
const product = str.split(', ');
product.sort(); // сортирует элементы внутри массива как строки по алфавиту
console.log(product.join('$'));