//Классификация типов данных 

/*

Простого типа

Числа: 1,2,3
Строки: 'string', 'name';
Лог. типы: 
true/false  
null
undefined - нет значения
symbol 
BigInt - отображает большие числа

Объекты

Массивы: []
Функции: function(){}
Объект даты
Регулярные выражения
Ошибки

Обычные объекты

*/

let number = 5.4;
console.log(number/0); // = Infinity - числовой тип данных, обозначающий бесконечность

let und;
console.log(und); //undefined

//Объект
const obj = {
//свойства объекта
    name: 'Igor',
    age: 25,
    isMarried: false,  
};
console.log(obj.name);
console.log(obj['name']);

//Массивы

let arr = ['plug.png', 'orange.jpg', 6, {}, []];
console.log(arr);
console.log(arr[1]);


const arrDop = [1, 2, 3];
console.log(arrDop);
const objDop = {a: 1, b: 2, c: 3};
console.log(objDop);

const people ={
    'Anna':505,
    'Elice':1000,

};