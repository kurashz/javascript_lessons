"use strict";


/*  DEFER - сообщает браузеру, что он должен продолжать обработку страницы и загружать скрипт в фоновом режиме. После чего запустить скрипт в фоновом режиме.

- Скрипты с дефер никогда не блокируют страницу 
- Скрипты с дефер выполняются после полной загрузки ДОМ дерева, но срабатывают до события domcontentloaded
- Скрипты выполняются последовательно:!!!   
<script defer src="scrpt1.js"></script> 
<script defer src="scrpt2.js"></script> 
*/ 

/* <script defer src="/js/31) Async, defer, динамические скрипты, Урок 47.js"></script> 
<p>1</p>
<p>2</p> 
*/



/*  ASYNC - запускает скрипт как только он был загружен. Независимые скрипты. *кто первый загрузился, тот первый и начинает работу.

- Страница не ждет асинхронных скриптов. Содержимое просто обрабатывается и отображается
- События и domcontentloaded не ждут друг друга

*/


const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src){
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(src); // помещает элемент в конецк родителя
}

loadScript("js/script1.js");
loadScript("js/script2.js");