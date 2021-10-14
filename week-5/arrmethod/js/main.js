// for(let i = 0; i < arr.length;i++){
//     console.log(arr[i]);
// }

/// forEach()
// arr.forEach((item, index, array) => {
//     // console.log(item);
//     // console.log(index);
//     // console.log(array);
//     console.log(item * 2);
// }) 

// let newArr = arr.map((item) => {
//     return item + 10
// } )
// console.log(newArr);

// map()
// arr.map((item, index, array) => {
//     // console.log(item);
//     // console.log(index);
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// filter()

// let newArr = arr.filter((item, index, array) => {
//     return item > 4
// })
// console.log(newArr);

// let str = 'Ivan, Misha, Andrei, Oleg, Aktan'
// // let newStr = atr.split(', ')
// let fArr = str.split(', ').filter(item => {
//     // return item.length > 4
//     return /\a/gi.test(item)
// })
// console.log(fArr);
// // console.log(newStr);

// indexOf
let arr = ['Ivan', 'Misha', 'Andrei', 'Oleg', 'Aktan']
// let index = arr.indexOf('Oleg')
// console.log(index);

// findIndex()
// let index = arr.findIndex((item, index, array) => {
//     return item .length === 5
// })
// console.log(index);

// let arr = [
//     {
//         name: 'Ivan'
//     },
//     {
//         name: 'John'
//     },
//     {
//         name: 'Oleg'
//     },
//     {
//         name: 'Aktan'
//     },
//     {
//         name: 'Emily'
//     }
// ]

// find()
// console.log(arr.find(item => item.name === 'Oleg'));
// console.log(arr.findIndex(item => item.name === 'Oleg'));

// every()
// let arr = [1, 2, 3, '10', 12, 24]
// lat result = arr.every((item, index, array) => {   // Все элемаенты
//     return typeof item === 'number'
// })
// console.log(result);


// some()
// let arr = [1, 2, 3, '10', 12, 24]  
// let result = arr.some((item) => {   // хотя бы 1 элемент
//     return typeof item === 'number'
// })
// console.log(result);


// includes(element, fromIndex)
 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = arr.includes(9, 3)
// console.log(result);

// reduce()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = arr.reduce((prevVal, cuurVal, currIndex, array) => {
    // console.log(prevVal);
    // console.log(cuurVal);
    // console.log(currIndex);
    // console.log(array);  
})






