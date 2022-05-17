"use strict";

// // const obj = new Object();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// console.log(options); // { name: 'test', width: 1024, height: 1024, colors: { border: 'black', bg:'red' }}

// // Оператор delete delete options.name; console.log(options);  { width: 1024,
// // height: 1024, colors: { border: 'black', bg: 'red' } } перебор всех свойст
// // объекта - for in
// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let jey in options[key]) {
//             console.log(`Свойство: ${jey} имеет значение ${options[key][jey]}`); // console.log(options["colors"]["border"]);  black
//             counter++;
//         }
//     } else {
//         console.log(`Свойство: ${key} имеет значение ${options[key]}`);
//         counter++;
//         /*Свойство: name имеет значение test
//         Свойство: width имеет значение 1024
//         Свойство: height имеет значение 1024
//         Свойство: border имеет значение black
//         Свойство: bg имеет значение red */
//     }
// }
// console.log(counter);
//         /* Свойство: name имеет значение test
//         Свойство: width имеет значение 1024
//         Свойство: height имеет значение 1024
//         Свойство: colors имеет значение [object Object]
//         */

// МЕТОД МАССИВА Oject.keys()
// Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("test"); 
    }
};
console.log(Object.keys(options)); // [ 'name', 'width', 'height', 'colors' ]

console.log(Object.keys(options).length); // 4

options.makeTest();

const { border, bg } = options.colors; 
console.log(border, bg);