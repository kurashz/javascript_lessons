// Цикл в цикле 

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// Задача на пирамидку

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenth = 7; // 

// for (let i = 1; i < lenth; i++) {
//     console.log(`Level 1: ${i}`);
//     for (let j = 0; j < i; j++) {
//         console.log(`Level 2: ${j}`);
//         result +="*";
//     }
//     result += '\n';
// }

// console.log(result);

let result = '';
const lenth = 7; // 

for (let i = 1; i < lenth; i++) {
    console.log(`Level 1: ${i}`);
    for (let j = 0; j < i; j++) {
        console.log(`Level 2: ${j}`);
        for (let k = 0; k < i; k++) {
            console.log(`Level 3: ${k}`);
        }
    }

}

console.log(result);