'use strict';


// Возведение в степень

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x; // result = x * result;
//         console.log(result);
//     }
//     return result;
// }

// function pow(x, n) {
//     if (n === 1) { // база рекурсий 
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// Шаг рекурсий - запуск функции с другим значением
// Глубина рекурсий - общее кол-во вызовов функии вместе с первой.

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

// Средний прогресс со всех студентов, по всем курсам

/* Метод  Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]


Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
Array.isArray(obj)
*/



function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / students;

}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByIRekyrsiya(data){
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else{
        
    }
}
console.log(getTotalProgressByIRekyrsiya(students));