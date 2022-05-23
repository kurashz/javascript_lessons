"use strict";

function hello(){
    console.log("Hello");
}
hello();

function hi(){
    console.log("hi");
}
hi();

const arr = [7,1,22,3,5,8], sorted = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}
console.log(sorted);

