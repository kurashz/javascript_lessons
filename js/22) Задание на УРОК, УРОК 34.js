
/* 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
    count: 0,
    movies: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
        while (
            personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)/* Проверка на НЕ ЧИСЛО */
        ) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < personalMovieDB.count; i++) {
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
    },
    searchMyFilm: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        // for (let i = 1; i <= 3; i++) {
        //     let genresAnswer =  prompt(`Ваш любимый жанр под номером: ${i}`)
            
        //     if(genresAnswer == '' || genresAnswer == null){
        //         console.log('Введите жанр повторно!');
        //         i--;
        //     } else{
        //         personalMovieDB.genres[i - 1] = genresAnswer;
        //     }
        //     personalMovieDB.genres.forEach((item, i) => {
        //         console.log(`Любимый жанр ${i + 1} - это ${item}`);
        //     });
        // }

        for (let i = 1; i < 2; i++) {
            let genresAnswer =  prompt(`Введите ваш любимый жанр через запятую`);
            
            if(genresAnswer == '' || genresAnswer == null){
                console.log('Введите жанр повторно!');
                i--;
            } else{
                personalMovieDB.genres = genresAnswer.split(', ');
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
};

