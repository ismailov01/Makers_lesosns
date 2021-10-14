// while, do while
// let arr = [1, 2, 3, 4, 5]

// let i = 0

// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }

// let num = 1
// while(num <= 100){
//     if(num % 2 !== 0) {
//         console.log(num)
//     }
//     num++
// }

// let i = 50
// do {
//     console.log(i, 'Сработает один раз по любому')
// }while(i < 40)

// FOR

// for(let i = 0; i < 20; i++){
    // console.log(i);
// }

// let arr = ['Arstan', 'Beka', 'Akai']
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     if(arr[i] === 'Beka'){
//         alert(arr[i])
//         continue
//     }
//     console.log('Код ниже')
// }
// let users = [
//     {
//         name: 'Kuba'
//     },
//     {
//         name: 'Atai'
//     },
//     {
//         name: 'Vala'
//     },
//     {
//         name: 'Erlan'
//     }
// ]
// for(let i = 0; i < users.length; i++){
//     document.write(`<p>имя: ${users[i].name}</p>`)
// }
// console.log(users);

// for...of, for...in
// for(let i of users){
//     console.log(i)
// }

// for(let i in users){
//     console.log(users[i]);
// }

// let user = {
//     name: 'Atai'
// }
// // for(let key in user){
// //     console.log(user[key]);
// // }

// for(let value of user){
//     console.log(value)
// }
// С помощью for in можно перебирать и  объекты и массивы
// С помощью for of можно перебирать только массивы





// let num = 5
// console.log(num++);
// console.log(num--);
// console.log(num);

// number += 1


// let arr = [true, 7, 2, 'Hello', NaN]
// let sum = 0
// for(let i = 0; i < arr.length; i++ ){
//     if (typeof arr[i] === 'number' && arr[i].toString() !== "NaN") {
//         sum += arr[i]
//     }
// }
// console.log(sum);


// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]
// let positive = 0
// let zero = 0
// let negative = 0
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 0){
//         zero++
//     }
//     else if(arr[i] > 0){
//         positive++
//     }
//     else if(arr[i] < 0) {
//         negative++
//     }
// }
// console.log(zero, negative, positive);

