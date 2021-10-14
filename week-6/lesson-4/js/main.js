//! JQuery events

$(document).ready(() => {
    console.log('Dom zagruzhen');
})
//!onclick
// let btn = $('button')
// btn.on('click', () => {
//     console.log('Hi');
// })


// let btn = $('button')
// function sayHello(){
//     alert('HEllo')
// }

//!doubleclick
// btn.on('dblclick', sayHello)

//!focus
// let input = $('input')
// input.on('focus', () => {
//     console.log('Есть Фокус');
// })
//!blur
// input.on('blur', () => {
//     console.log('Убираем фокус');
//     if(!input.val()){
//         // alert('Данное поле обязательно для заполнения')
//         input.css('border', '2px solid red')
//     } else {
//         input.css('border', '2px solid green')

//     }
// })

//!input
// input.on('input', function(e) {
//     console.log(e);
// })

//!select при выделении содержимого input, textarea
// let input = $('input')
// input.on('select', (e) => {
//     console.log(e);
// })

// let p = $('p')
// //!Не работает 
// // p.on('select', (e) => {
//     //     console.log(e);
//     // })
    
// let strong = $('strong')
// p.on('mouseup', (e) => {
//     let selText = window.getSelection().toString()
//     strong.text('Вы выделили' + selText)
// })

//!hide, show, toggle
// let img = $('img')
// let btnHide = $('#btn-hide')
// let btnShow = $('#btn-show')
// let btntoggle = $('#btn-toggle')

// btnHide.on('click', () => {
//     img.hide(2000)
// })
// btnShow.on('click', () => {
//     img.show(1000)
// })
// btntoggle.on('click', () => {
//     img.toggle(1500)
// })

//!fadeIn, fadeOut, fadeTo, fadeToggle
// let img = $('img')
// let btnFadeOut = $('#btn-hide')
// let btnFadeIn = $('#btn-show')
// let btnFadeTo = $('#btn-to')
// let btnFadeToggle = $('#btn-toggle')

// btnFadeOut.on('click', ()=> {
//     img.fadeOut(1000)
// })
// btnFadeIn.on('click', () => {
//     img.fadeIn(1000)
// })
// btnFadeToggle.on('click', () => {
//     img.fadeToggle(1000)
// })

// let opacity = 1
// btnFadeTo.on('click', () => {
//         img.fadeTo(1000, 0.1)
// })

//!Modal 

let btnShowModal = $('.show-modal')
let btnCloseModal = $('.my-modal button')
let modal = $('.modal')
let myModal = $('.my-modal')
function showModal() {
    modal.fadeIn(1000).css('display', 'flex')
    
}
function closeModal() {
    modal.fadeOut(1000)
}


btnShowModal.on('click', showModal)
btnCloseModal.on('click', closeModal)
let h3 = $('.my-modal h3')
let p = $('.my-modal p')
modal.on('click', (e) => {
    if(e.target !== myModal[0] && e.target !== p[0] && e.target !== h3[0]){
        closeModal()
    }
})

//! range input

let range = $('#range')
let img = $('img')
range.on('change', (e) => {
    let value = e.target.value
    img.fadeTo(10, value)
})





























