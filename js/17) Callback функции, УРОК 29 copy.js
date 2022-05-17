"use strict";

// trim(); - Метод trim() удаляет пробельные символы с начала и конца строки.
// Пробельными символами в этом контексте считаются все собственно пробельные
// символы (пробел, табуляция, неразрывный пробел и прочие) и все символы конца
// строки (LF, CR и прочие).

function first() {
    setTimeout(function () { // Задержка в пол секунды
        console.log(1);
    }, 500);
}
function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}
function done(){
    console.log('Я прошел этот урок');
 }

 learnJS('JavaScript', done);

learnJS('JavaScript', function(){
    console.log('Я прошел этот урок');
});

