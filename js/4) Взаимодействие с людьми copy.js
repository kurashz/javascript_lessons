// Всплывающее окно

alert('ALO'); 


//Всплывающее окно с воможностью ответа Да/Нет

const result = confirm('Are you here?'); 
console.log(result); 

//Всплывающее окно с возможность ответа. В ответ передается СТРОКОВЕ значение

const answer = prompt('Вам есть 18?','');
console.log(answer); // результатом становится СТРОКОВЕ значение

// /* Вся информация, которая приходит от пользователя, приходит в виде строк */ 

console.log(typeof(answer));

// Преобразование строчного ответа можно осуществить с помощью символа + перед переменной - динамическая типизация.

const answer = +prompt('Вам есть 18?','');
console.log(answer );
console.log(typeof(answer));

const answer = +prompt('Вам есть 18?','');
console.log(answer + 0 );
console.log(typeof(answer));

const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Какая ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);
console.log(answers);
console.log(typeof(answers));