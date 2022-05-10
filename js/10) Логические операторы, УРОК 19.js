/*

ИЛИ «||» находит первое истинное значение
И «&&» находит первое ложное значение

*/

const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('Я сыт');
} // true 

console.log((hamburger && fries)); // true - РЕЗУЛЬТАТ логических операций - логическое булевое значение 0 или 1
//Если одно из блюд будет отсутсвовать, мы получим false

const hamburger1 = true;
const fries1 = false;

if (hamburger1 && fries1) {
    console.log('Я сыт');
}
console.log((hamburger1 && fries1)); // false



const hamburger2 = 5;
const fries2 = 0;

if (hamburger2 && fries2) {
    console.log('Я сыт');
}

// Динамическая типизация. Пять сущностей, которые всегда будут false:
// 0 = false;
// '' = false; // пустая строка
// null = false;
// undefined = false;
// NaN = false;

const gamburger = 2;
const free = 1;

if (gamburger === 3 && free) {
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
}


const gamburger1 = 3;
const free1 = 1;
const cola = 0;

if (gamburger1 === 3 && cola === 1 && free1) {
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
}

// ИЛИ

const gamburger2 = 0;
const free2 = 0;
const cola2 = 3;

if (gamburger2 || cola2 || free2) {
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
}
console.log(gamburger2 || cola2 || free2); 

let reportJohn, reportSam, reportAlex, reportMaria = 'done';
console.log(reportJohn || reportSam || reportAlex || reportMaria); // хотя бы 1 отчет есть (у марии)



const gamburger3 = 3;
const free3 = 3;
const cola3 = 0;
const nuggets = 2;

if (gamburger3 === 3 && cola3 === 2 || free3 === 3 && nuggets) { // 3 гамбургеа и хотя бы 1 кола или 3 фри и хотя бы 1 наггетсы
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
}
console.log(gamburger3 === 3 && cola3 === 2);
console.log(free3 === 3 && nuggets);


console.log( NaN || 2 || undefined ); //2 
console.log( NaN && 2 && undefined ); //NaN
console.log( 1 && 2 && 3 ); // 3
console.log( !1 && 2 || !3 ); //false
console.log( 25 || null && !3 ); // 25
console.log( NaN || null || !3 || undefined || 5); //5
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

console.log(!3 && undefined);
console.log(null && !3 && undefined);



const hamburger4 = 3;
const fries4 = 3;
const cola4 = 0;
const nuggets4 = 2;
 
if (hamburger4 === 3 && cola4 || fries4 === 3 && nuggets4) {
   console.log('Done!')
}


let hamburger11;
const fries11 = NaN;
const cola11 = 0;
const nuggets11 = 2;
 
if (hamburger11 || cola11 || fries11 === 3 || nuggets11) {
   console.log('Done!');
}

console.log(hamburger11 || cola11 || fries11 === 3 || nuggets11);

let hamburger12;
const fries12 = NaN;
const cola12 = 0;
const nuggets12 = 2;
 
if (hamburger12 && cola12 || fries12 === 3 && nuggets12) {
   console.log('Done!')
}
console.log(hamburger12 && cola12 || fries12 === 3 && nuggets12);