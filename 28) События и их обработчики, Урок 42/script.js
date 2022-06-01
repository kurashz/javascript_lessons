const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//     alert('Click');
// }
// такой способ позволяет задавать несколько действий по клику
// btn.addEventListener('click', () =>{
//     alert('Clock');
// }); 
// btn.addEventListener('click', () =>{
//     alert('Clack');
// }); 
let i = 0;
const deleteElement = (event) =>{
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if(i == 1){
    //     btn.removeEventListener('click', deleteElement);  // после 1 нажатия, событие онклик удаляется
    // }

}; 

 
// btn.addEventListener('click', deleteElement); 
// overlay.addEventListener('click', deleteElement); 

// Навесить действие на несколько элементов сразу, нужен перебор эелментов querySelectroAll (forEach)

const btns = document.querySelectorAll('button');

btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true}); 
});

// const link = document.querySelector('a');
// link.addEventListener('click', (event) =>{
//     event.preventDefault(); // отмена стандартного действия браузера. Теперь переход по ссылке не работает
//     console.log(event.target);
// });

