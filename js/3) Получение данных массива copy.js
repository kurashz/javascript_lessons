const arr = ['a', 'b', 'c'];
const objArr = {
    valueA:'a',
    valueB:'b',
    2:'c'
};


objArr.b = '2';
console.log(objArr['b']);
console.log(objArr.b);

//Вложенные структуры

const objInput = {
    val1:'a',
    val2:'b',
    val3:'c',
        newVal:{
            val1_1:'d',
            val2_1:'e',
                newValCopy:{
                    val1_3:'f',
                    val2_3:'g'
                }
        }

};
console.log(objInput);