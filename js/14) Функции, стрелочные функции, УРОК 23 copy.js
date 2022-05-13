// function showMessage() {
//     alert( 'Всем привет!' );
//   }

// showMessage();

// function showMessage1(text) {
//     console.log(text);
//     let num = 5;
// }

// showMessage1('Hello world');
// console.log(num);

// // Переменная доступна только внутри функции. К ней нельзя обратиться вне функции, если она задана внутри function.
// let num2 = 20;
// function showMessage2(text2) {
//     console.log(text2);
//     let num2 = 5;
//     console.log(num2); // 5
// }

// showMessage2('Hello world');
// console.log(num2); // 20 


// function calc (a, b){
//     return (a + b);
//     // после return функция прекращает работать
//     // Return возвращает значение переменной наружу
// }
// console.log(calc(2,4));
// // FUNCTION DECLARATION
// function ret(){
//     let num = 50;
//     return num;
// }
// const anotherNum = ret ();
// console.log(anotherNum);


// // FUNCTION EXPRESSION 
// let logger = function (){
//     console.log('Hello');
// };
// logger();

// //СТРЕЛОЧНАЯ ФУНКЦИЯ




const usdCurs = 66;
const discount = 0.33;

function convert (amount, curs){
    console.log(curs * amount);
    return curs * amount;
}
function promotion (result){
    console.log(result * discount);
}

promotion(convert(2000, usdCurs));


