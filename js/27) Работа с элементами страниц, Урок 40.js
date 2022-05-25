"use strict";

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

//     // Получение всех элементов внутри общего элемента
//    const wrapper2 = document.querySelector('.wrapper'),
//     oneHeart2 = wrapper2.querySelector('.heart'),
//     wrapper2 = wrapper2.querySelector('.wrapper');

//1) Задание инлайн стилей по ДОМу

// box.style.backgroundColor = '#123456';
// box.style.width = '500px'; // Все задавать СТРОКОЙ!

//Пример выше, но уже через css стили
box.style.cssText = 'background-color: blue; width:550px;';

//Можно использовать переменные:
// const NUM = 1024;
// box.style.cssText = `background-color: blue; width: ${num}px;`;

btns[1].style.borderRadius = '0px';
btns[1].style.backgroundColor = 'red';

circles[0].style.backgroundColor = 'red';
// Изменение цвета всех элементов с помощью цилка:
for (let i=0; i<hearts.length; i++){
    hearts[i].style.backgroundColor = 'black';
}
// Изменение цвета всех элементов с помощью цилка forEach
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

// 2) Создание элементов - метод append()

const div = document.createElement('div'); // Существует только внутри JS
div.classList.add('black');

document.body.append(div); // Берем тег body как родителя и во внутрь добавляем наш новый див. Данный метод всегда должен опираться на элемент страницы!

// Поместить новый элемент в определенный класс (в конец):

wrapper.append(div);

// Поместить новый элемент в определенный класс (в начало):

wrapper.prepend(text,div);

// Поместить новый элемент перед/после:


hearts[1].before(div); // перед
hearts[1].after(div); //после

// Удалить элемент со страницы

circles[0].remove();

// Замена одного элемента на другой

hearts[2].replaceWith(circles[0]);


// 3) Устаревшие методы 
// 3.1) Append
wrapper.appendChild(div);
// 3.2) before/after 
wrapper.insertBefore(div, hearts[1]);
// 3.3) remove
wrapper.removeChild(hearts[0]);
// 3.4) replace
wrapper.replaceChild(circles[0],hearts[0]); // 1 Тот элемент на который мы хотим что то поменять, 2 тот элемент, который меняется

// Добавление HTML структуры

wrapper.append(div);

div.innerHTML = '<h1>Hello World!</h1>'; // Добавляет в полученный  wrapper = document.querySelector('.wrapper'); новый div, в который помещается HTML структура

div.textContent = 'Hello!!!'; // Добавляет в полученный  wrapper = document.querySelector('.wrapper'); новый div, в который помещается Текст

div.insertAdjacentHTML('beforebegin', '<h2>TEST</h2>'); //вставка перед элементом
div.insertAdjacentHTML('beforeend', '<h2>TEST</h2>'); //вставка после элементом
div.insertAdjacentHTML('afterbegin', '<h2>TEST</h2>'); //вставка в начало элемента
div.insertAdjacentHTML('beforeend', '<h2>TEST</h2>'); //вставка в конец элемента
