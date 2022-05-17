"use strict";
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


let numberOfFilms = '';

const personalMovieDB = {
    conut: numberOfFilms,
    movies: {},
    genres: [],
    privat: false
};


function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) /* Проверка на НЕ ЧИСЛО */ ) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    }
}
start();

function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        const a = prompt('Введите название фильма: ', '').trim(),
            b = prompt('На сколько вы оцените фильм?');
        if (a != null && b != null && a != '' && b != '' && a.length < 10) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

        console.log(personalMovieDB);
    }
}
rememberMyFilms();

function searchMyFilm() {
    if (personalMovieDB.conut < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.conut >= 10 && personalMovieDB.conut < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.conut >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}

searchMyFilm();
// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);



// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres() {
    for (let i = 1; i<=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером: ${i}`);
    }
}

writeYourGenres();