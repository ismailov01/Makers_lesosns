// Native JS events

// DOMContentLoaded
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM полностью прогружен');
// })

// let btn = document.querySelector('button')
//  #2 способ
// btn.onclick = () => {
//     alert('clicked')
// }


// #3 способ 
// btn.addEventListener('click', (event) => {
//     // alert('clicked')
//     console.log(event);
// })

/// online, offline
// window.addEventListener('offline', () => {
//     console.log('Пропал Интернет');
// })

// window.addEventListener('online', () => {
//     console.log('Появился Интернет');
// })

// mousemove - любое движение мышью
// mousedown - при нажатии на мышь
// mouseup - при отпускании мыши
// document.addEventListener('mousemove', (e) => {
//     console.log(e);
// })

// document.addEventListener('mousedown', (e) => {
//     console.log(e);
// })

// document.addEventListener('mouseup', (e) => {
//     console.log(e);
// })

// input - на каждое изиенение input
// paste - когда вставляем
// copy - когда копируем
// let inp = document.querySelector('input')
// let h3 = document.querySelector('h3')
// inp.addEventListener('input', (e) => {
//     h3.innerText = e.target.value
// }) 

// inp.addEventListener('paste', (e) => {
//     alert('Скопировать')
// })

// inp.addEventListener('copy', () => {
//     alert('Нельзя капировать')
// })

// resize - при изменении размера экрана
// window.addEventListener('resize', (e) => {
//     console.log(e);
// })

// submit - у тега form при нажатии на enter
// let input = document.querySelector('input')
// let form = document.querySelector('form')
// let ul = document.querySelector('ul')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let text = input.value
//     let li = document.createElement('li')
//     li.innerText = text
//     ul.append(li)
//     input.value = ''
// })



// keypress - любое нажатие на клавишу
// keydown - при нажатии на клавишу
// keyup - при отпскании клавиши
// document.addEventListener('keypress', (e) => {
//     console.log(e);
// }) 

// document.addEventListener('keydown', (e) => {
//     console.log(e);
// }) 

// document.addEventListener('keyup', (e) => {
//     console.log(e);
// }) 

// let span = document.querySelector('.first-span')
// let btn1 = document.querySelector('.change-color')
// let btn2 = document.querySelector('.change-size')

// btn1.addEventListener('click', () => {
//     let red = Math.ceil(Math.random() * 255)
//     let green = Math.ceil(Math.random() * 255)
//     let blue = Math.ceil(Math.random() * 255)
//     span.style.color = `rgb(${red}, ${green}, ${blue})`
// })
// btn2.addEventListener('click', () => {
//     span.style.fontSize = `${Math.ceil(Math.random() * 100)}px`
// })


// let btn3 = document.querySelector('#btn3')
// let btn4 = document.querySelector('#btn4')
// btn3.addEventListener('click', () => {
//   btn3.style.left = '-100px'
// })
// btn4.addEventListener('click', () => {
//   btn4.style.right = '100px'
// })

// let list = document.querySelectorAll('ul')
// let count = 1
// function sheep() {
//     list[0].innerHTML += `<li>${count} - овечка </li>`
//     count++
//     if(count === 21){
//         clearInterval(x)
//     }
// }
// let x = setInterval(sheep, 500)

// window.addEventListener('resize', () => {
//     let h1 = document.createElement('h1')
//     let windowInnerWidth = window.innerWidth
//     let windowInnerHeight = window.innerHeight
//     h1[0].innerHTML = `Width${windowInnerWidth}`
// })


































