// let title = document.getElementsByTagName('h1')
// console.log(title);

let title = $('h1')
let welcome = $('.welcome')
let title1 = $('#title')
let inp = $('[name="inp-name"]')
// console.log(title, welcome, title1, inp);

// title1.style.color = 'red'   //!Native JS

//!JQuery
// title.css('color', 'red')       
// welcome.css('background-color', 'green')

// welcome.classList.add('example')    //!Native JS

//!JQuery
// welcome.addClass('example')
// console.log(welcome.hasClass('welcome')); 
// welcome.removeClass('example')

// append, appndChild, prepend
// title1.append('World')
// title1.prepend('World')

// title.prependTo('title1')

// $('.center').before('<h3 class="new">New Element</h3>')
// $('.center').after('<h3 class="new">New Element 2</h3>')

// let result = confirm('Are you 18 y.o?')
// if(result){
//     $('h1').css('display', 'block')
// }

// $('p').empty() // очищает
// $('p').remove() // Удаляет


// $('body').html('<h1>Hello Makers Bootcamp</h1>')
// $('body').after('<div class="container"></div>')

// let clone = $('body').clone()
// // console.log(clone);
// clone[0].children[0].innerText = 'Modified'
// // console.log(clone);
// $('.container').append(clone)


// let num1 = +prompt('enter first number')
// let num2 = +prompt('Enter second number')
// let result = num1 + num2
// $('body').html(`<h1>${result}</h1>`)
//!Calculator
// function sum(){
//     let num1 = +prompt('enter first number')
//     let num2 = +prompt('Enter second number')
//      let result = num1 + num2
//      $('body').html(`<h1>${result}</h1>`)
// }
// function min(){
//     let num1 = +prompt('enter first number')
//     let num2 = +prompt('Enter second number')
//      let result = num1 - num2
//      $('body').html(`<h1>${result}</h1>`)
// }
// function mul(){
//     let num1 = +prompt('enter first number')
//     let num2 = +prompt('Enter second number')
//      let result = num1 * num2
//      $('body').html(`<h1>${result}</h1>`)
// }
// function div(){
//     let num1 = +prompt('enter first number')
//     let num2 = +prompt('Enter second number')
//      let result = num1 / num2
//      $('body').html(`<h1>${result}</h1>`)
// }

































