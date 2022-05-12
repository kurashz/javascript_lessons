/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log('Пользователь посмотрел: ' + numberOfFilms + ' фильмов');

const personalMovieDB = {
    conut: numberOfFilms,
    movies: {},
    genres: [],
    privat: false
};

start: for (let i = 0; i < numberOfFilms; i++) {
    const a = prompt('Введите название фильма: ', ''), b = prompt('На сколько вы оцените фильм?');  
        if(a != null && b!= null && a != '' && b != '' && a.length < 10){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else{
            console.log('error');
            i--;
        }
    
        console.log(personalMovieDB);
        }
    
        if(personalMovieDB.conut < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.conut >= 10 && personalMovieDB.conut < 30){
            console.log('Вы классический зритель');
        } else if (personalMovieDB.conut >=30){
            console.log('Вы киноман');
        } else{
            console.log('Ошибка')
        }
    