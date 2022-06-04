'use strict';


// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode); // Получить родителя (класс в котором лежит элемент) ЕГО НОДУ
// console.log(document.querySelector('[data-current="3"]').nextSibling); // Получить  следующий по счету элемент - ЕГО НОДУ
// console.log(document.querySelector('[data-current="3"]').previousSibling); // Получить  предыдущий по счету элемент - ЕГО НОДУ

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Получить  следующий по счету элемент!
// console.log(document.querySelector('#current').parentNode.parentElement); // Получить родителя (класс в котором лежит элемент)



// Перебор псевдомасива Childnodes

for (let node of document.body.childNodes){
    if(node.nodeName == '#text') {continue;}
    console.log(node);
}