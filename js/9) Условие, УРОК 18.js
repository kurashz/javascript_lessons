// Условие

if (4 == 9){
    console.log('Ok');
} else{
    console.log('Ne ok');
}

const num = 50;
if (num < 49){
    console.log('Error');
} else if (num > 100){
    console.log('More');
} else {
    console.log('ok');
}

// Тернарный оператор
(num === 50) ? console.log('ok') : console.log('Error');

// Строгое сравнение
const num = 110;
switch (num){
    case 49: 
        console.log('Неверно'); 
        break;
    case 59: 
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Not enough');
        break;
}