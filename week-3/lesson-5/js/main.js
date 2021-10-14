// let result = +prompt('Enter number')
// if(result > 23 && result < 40){
//     alert('Hello')
// }
// else{
//     alert('Godbye')
// }
// result > 23 && result < 40 ? alert('Hello') : alert('Godbye');


// let arr = [{}]
// !arr.length ? console.log("Est") : arr.length > 10 ? console.log("Da bolshe") : console.log("net menshe");

// let num = 3
// num > 0 && num < 10 ? num > 5 ? alert('num > 5') : alert('num < 5') : alert('i')

// if(num > 0 && num < 10) {
//     if(num > 5){
//         alert('num > 5')
//     } else {
//         alert('num < 5')
//     }
// } else {
//     alert('Hi')
// }

// let seasons = +prompt('Enter number')

// switch(seasons){
//     case 1: alert('leto')
//     break;
//     case 2: alert('zima')
//     break;
//     case 3:alert('vesna')
//     break;
//     case 4: alert('osen')
//     break;
// }

// let arr = [8, 3, 2, 1, 3, 4, 5, 8]
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// let arr = [5, 6, 7, 8, 4]
// let sum = 0
// for(const i of arr){
//     if(i % 2 === 0){
//         sum+= i
//     }
// }
// console.log(sum)

// let obj = {
//     'Bishkek': 'Kyrgyzstan',
//     'Minsk': 'Belarus',
//     'Moscow': 'Russia',
//     'Kiev': 'Ukraina'
// }

// for (let i in obj) {
//     console.log(`${i} -это ${obj[i]}.`);
// }

// let obj = {
//     title: 'Nike',
//     description: 'lorem ipsum',
//     count: 10
// }
// for(key in obj){
//     console.log(key, obj[key]);
// }

// let count = 0

// for(i = 100; i < 500;i++ ){
//     if(i % 3 === 0){
//         count++
//     }
// }
// console.log(count);


// let arr = ['arbuz', 'dynia', 'vishn']
// arr.push('mango')
// arr.splice(arr.length, 0,'klubnika')
// let newArr = arr.splice(1, 1,)
// let newArr = arr.slice(1, 3)
// arr.unshift("10")

//развернутый ответ
// for(i = 0 ; i < arr.length; i++){
    // if(arr[i] === 'dynia'){
    //     arr.splice(i + 1, 0 ,'pomidory')
    // }
//     let str = arr[i] // записываем слово в перменную
//     let strArr = str.split("") //переводим наше слово в массив
//     let upperletter = strArr[0].toUpperCase() // первый элемент поднимаем до верхнего регистра
//     strArr.splice(0, 1,upperletter) // заменчем первый элемент массива strArr на новую букву
//     let newStr = strArr.join("") // переводим из массива strArr в строку 
//     arr.splice(i, 1,newStr) // заменяем старое слово на новое
// }
// console.log(arr);

// короткий ответ
// for (let i = 0; i < arr.length; i++) {
    // let str = arr[i]
    // str = str[0].toUpperCase() + str.slice(1)
    // arr.splice(i, 1, str)
// }
// console.log(arr);

//  let num1 = +prompt('enter number')



let a = 54,
  b = 24;
let n = 0;
for (let i = 1; i <= a; i++) {
  if (a % i === 0 && b % i === 0) {
    n = i;
  }
  if (a === i || b === i) {
    break;
  }
}
console.log(n);


// let arr1 = [1, 2, 3];
// let arr2 = [2, 30, 1];
// let arr = arr1.concat(arr2);
// for (let i = 0; i < arr.length; i++) {
//   for (let y = 0; y < arr.length; y++) {
//     if (y === i) {
//       continue;
//     }
//     if (arr[i] === arr[y]) {
//       arr.splice(y, 1);
//       y--;
//     }
//   }
// }
// console.log(arr);

let arr = 














