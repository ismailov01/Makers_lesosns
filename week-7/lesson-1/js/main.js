// ! Синхронность и асинхронность, promise, запросы

//! setTimeOut позволяет нам вызвать функцию только один раз через определённое время
// setTimeout(() => {
//     console.log('zero');
// }, 2000)

// console.log('first');
// console.log('second');
// console.log('third');


//! setInterval позволяет функцию регулярно через определённый интервал времени
// let id = setInterval(() => {
//     console.log('Hi');
// }, 3000);
// setTimeout(() => { 
//     clearInterval(id)
// }, 5000);

//! Promise
// !Promise - это объект, у которого есть 3 
//! состояния: 
//!pending - ожидание
//!fulffilled- успешно выполнено(resolve)
//! rejected - выполнено с ошибкой
//! Методы promise
//! then - отловить успешный результат
//! catch - отловить результат с ошибкой
//! finally - отловить вне зависимости результата 
// const promise = new Promise((resolve, reject) => {
//     let age = prompt('enter age')
//     if(age > 25){
//         resolve('True')
//     } else {
//         reject('false')
//     }
// });

// promise.then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log('Итог');
// })

/// ! Запросы 

//!XMLHttpRequest
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon')
// xhr.send()
// xhr.onload = function() {
//     let response = JSON.parse(xhr.response)
//     console.log(response);
// }

//! fetch
// !Статусы:
//! 200-299 успешно
//! 400 Ошибка на фронте
// !403 - нету доступа
//! 404 - не найдено
//! 500 - ошибка сервера
// let api = 'https://pokeapi.co/api/v2/pokemon';
// fetch(api)
//     .then((response) => response.json())
//     .catch((error) => console.log(error);)
//     .then((data) => {
//         console.log(data);
//     })

// let tbody = $('tbody')
// let prev = $('.prev')
// let preloader = $('.preloader')
// let next = $('.next')
// let api = 'https://swapi.dev/api/people'

// function render(url) {
//     preloader.css('display', 'flex')
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             preloader.css('display', 'none')
//             tbody.html('')
//             data.results.forEach(item => {
//                 tbody.append(`
//                 <tr>
//                     <td>${item.name}</td>
//                     <td>${item.eye_color}</td>
//                     <td>${item.mass}</td>
//                     <td>${item.height}</td>
//                 </tr>
//                 `)
//             });
//             if(!data.previous){
//                 prev.addClass('disabled')
//             } else {
//                 prev.removeClass('disabled')
//                 prev.attr('id', data.previous)
//             } 
//             if(!data.next){
//                 next.addClass('disabled')
//             } else {
//                 next.removeClass('disabled')
//                 next.attr('id', data.next)
//             }
//         })
// }

// next.on('click', (e) => {
//     let url = e.currentTarget.id
//     console.log(url);
//     render(url)
// })
// prev.on('click', (e) => {
//     let url = e.currentTarget.id
//     console.log(url);
//     render(url)
// })
// render(api)







































































































































