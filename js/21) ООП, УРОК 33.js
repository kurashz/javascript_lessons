"use strict";

let str = 'some';
let strObj = new String(str);
console.log(str); // some
console.log(strObj); // [String: 'some']
console.log(typeof(strObj)); // object



// 
const solder = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello');
    },
};

const john = {
    health: 100,
};
// john.__proto__ = solder; // Устаревший метод получения свойств объекта
// Object.setPrototypeOf(solder,john); // Установка прототипа для джона от солдата. Теперь у джона добавилось свойства общего объекта Solder объекта 
console.log(john.armor);
// john.sayHello();

const john1 = Object.create(solder); // создаем новый объект джон1, который прототипно наследуется от солдата, для того, что бы джон1 имел доступ к свойствам солдата
john1.sayHello();
Object.setPrototypeOf(solder,john); // Установка прототипа для джона от солдата. Теперь у джона добавилось свойства общего объекта Solder объекта 