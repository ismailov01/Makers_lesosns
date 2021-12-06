//! XMLHttpRequest

// let list = $('.task-list')

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://localhost:8000/todos')
// xhr.send();
// xhr.onload = function() {
//     // console.log(xhr.response);
//     let data = JSON.parse(xhr.response)
//     // console.log(data);
//     data.forEach(element => {
//         list.append(`<li>${element.task}</li>`)
//     });
// }

//! fetch() 
// let list = $('.task-list')
// let promise = fetch('http://localhost:8000/todos')
// promise
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data);
//         data.forEach(element => {
//             list.append(`<li>${element.task}</li>`)
//          });
//     })

//! ajax
// let list = $('.task-list')
// $.ajax({
//     url: 'http://localhost:8000/todos',
//     type: 'GET',
//     success: function(data) {
//     //   console.log(data);
//             data.forEach(element => {
//             list.append(`<li>${element.task}</li>`)
//          });
//     },
//     error: function() {
//         console.log('ERROR');
//     }
// })

// let btn = $('.btn')
// let inp = $('.task-input')
// let list = $('.task-list')

// btn.on('click', function() {
//     let value = inp.val()
//     if(!value.trim()){
//         alert('Enter input')
//         return
//     } 
//     let newTask = {
//         task: value
//     }
//     postNewTask(newTask)
//     inp.val('')
// })

// function postNewTask(task) {
//     fetch('http://localhost:8000/todos', {
//         method: 'POST',
//         body: JSON.stringify(task),
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         }
//     }).then(() => render())
// }

// async function render() {
//     let res = await fetch('http://localhost:8000/todos')
//     let data = await res.json()
//         // .then(response => response.json())
//         // .then(data => {
//             list.html('')
//             data.forEach(item => {
//                 list.append(`<li id=${item.id}>${item.task}<button class="btn-delete">Delete</button></li>`)
//             })
//         }

// $('body').on('click', '.btn-delete', function(event){
//     // console.log('delete');
//     let id = event.target.parentNode.id;
//     fetch(`http://localhost:8000/todos/${id}`, {
//         method: 'DELETE'
//     })
//     .then(() => render())
// })

// render()


// let a = 6
// let b = 10
// // console.log(a + c);
// // console.log('hello');

// try{
//     console.log(a + c);
// } catch{
//     console.log('ERROR');
// }
// console.log('hello');


let block1 = $('.block1');
let list = $('.list');
let promise = fetch('https://rickandmortyapi.com/api/character')
promise
  .then(response => response.json())
  .then(data => {
    let results = data.results
    console.log(data);
    results.forEach(item => {
      list.append(`<li>${item.name}</li>`)
    })
  })





























































































































































