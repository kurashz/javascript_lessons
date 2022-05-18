"use sctrict";

// let a = 5, b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: b,
//     b: 1
// };
// console.log(obj);

// const copy = obj; // Передает ссылку на уже сущетсвующий объет

// copy.a = 10; // Модифицируем не новый COPY, А старый OBJ. Таким образом не может создать копию объекта и изменить значение внутри него

// console.log(copy);
// console.log(obj);

// Создание копий Объектов

function copyObject (mainObject){
    let objCopy = {};
    
    let key;
    for (key in mainObject){
        objCopy[key] = mainObject[key];
    }
    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4,
    }
};

const newNumbers = copyObject(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
    d:17,
    e:20,
};

console.log(Object.assign(numbers, add)); // объединение объектов 






const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice(); //копия старого массива
newArray[1] = 'abcd';
console.log(oldArray);
console.log(newArray);

//spread оператор ... 

const video = ['youtube', 'vimeo', 'rutube'], blogs =['WordPress', 'LiveJournal', 'Blogger'], inernet = [...video, ...blogs, 'vk', 'facebook'];

console.log(inernet);


function log(a,b,c){
    console.log(a); // 2
    console.log(b); // 5
    console.log(c); // 7
}
const num = [2, 5, 6];
log(...num);

const array = ['b', 'a'];
const newArr = [...array];
console.log(newArr);