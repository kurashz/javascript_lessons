// touchstart - свидетельствующее о новом касании
// touchmove - Каждый раз, когда двигается один или несколько пальцев, срабатывает событие touchmove
// touchend - Когда пользователь убирает палец с сенсорной поверхности, срабатывает событие touchend
// touchenter
// touchleave - палец скользит по экрану
// touchcancel - Точка соприкосновения не регистрируется на поверхности


document.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) =>{ // нажатие пальцем
        e.preventDefault(); // рекомендация всегда ставить
        console.log('Start');
        console.log(e.touches); // TouchList { 0: Touch, length: 1 }
        console.log(e.targetTouches); // TouchList { 0: Touch, length: 1 }

    });

    box.addEventListener('touchmove', (e) =>{ // зажатие пальца
        e.preventDefault(); // рекомендация всегда ставить
        console.log('Move');
    });

    box.addEventListener('touchend', (e) =>{ // отрыв пальца
        e.preventDefault(); // рекомендация всегда ставить
        console.log('End');
    })
});

// touches - список всех пальцев, которые взаимодействуют с интерфейсом (кол-во зажатий)
// targetTouches - все пальцы, которые взаимодействую с конктретным элементом
// changedTouches - список пальцев, которые участвуют в событии. 