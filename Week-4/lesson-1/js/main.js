// Функции, области видмимости, хойстинг
// 1) function decloration
// 2) function expression
// 3)arrow function

// function decloration

// function func(){
//     console.log('Hi');
// }
// // func()  

// function sayHello(){
//     alert('Hello!')
// }
// sayHello()

// объявляем функцию 
// function имя(парвметры){
//     ...тело...
// } 
// вызов функции
// имя()

// function sumTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
// } 
// let sum = sumTwoNumbers(10, 20)
// console.log(sum);



// function firstElem(arr){
//     let elem = arr.shift()
//     return elem
// }

// let array = [1, 2, 3, 4, 5]
// let result = firstElem(array)
// console.log(result);
// mulTwoNums(10, 20)
// function mulTwoNums(arg1, arg2 = 1){
//     console.log(arg1, arg2);
//     console.log(arg1 * arg2);
// }
// mulTwoNums(2, 5)
// console.log(num);
// var num = 20
// let str = '2'
// console.log(str);

// let message = 'Hello world!'
// function showMassege(message){
//     console.log(message);
// }
// showMassege(message)

// let newArray = ['str']  
// function array(arr){  // здесь функция принимает аргументы
//     console.log(arr);  
// }
// array(newArray) // здесь передвются аргументы функции 
// если функция принимает аргументы, то аргументы нужно передавать

// let numbers = [100, 200, 300]

// function lastElemofArray(array){
//     let lastElem = array.pop()
//     console.log(lastElem);
// }
// lastElemofArray(numbers)

// let boolValues = [true, false, true]
// lastElemofArray(boolValues)


// // function expression

// let sayHello = function(arg) {
//     console.log(arg);
// }
// sayHello()

// let obj = {
//     title: 'Makers',
// }
// function showTitle(arg1){
//     document.write(`<h1>${arg1.title}</h1>`)
// }
// showTitle(obj)

// let school = {
//     title: "Gazprom"
// }
// showTitle(school)
// let num1 = 50
// function func(){
//     let num1 = 20
//     console.log(num1);
// }
// func()
// console.log(num1);
// тело функции это локальная область видимости 

// function pow(x, n){
//     let result = x ** n
//     return result
// }
// let result = pow(2, 2)
// console.log(result);

// let num = +prompt('Enter number')
// function week(num){
//     if(num === 1){
//         return 'Понедельник'
//     }else if(num === 2 ){
//         reurn 'Вторник'
//     }else if(num === 3){
//         return'Среда'
//     }else if(num === 4){
//         return'Четверг'
//     } else if(num === 5){
//         return'Пятница'
//     } else if(num === 6){
//         return'Суббота'
//     } else if(num === 7){
//         return'Воскресенье'
//     } 
// }
// week(num)

// function week(num){
//     switch(num){
//         case 1: return 'Понедельник';
//         case 2: return 'Вторник';
//         case 3: return 'Среда';
//         case 4: return 'Четверг';
//         case 5: return 'Пятница';
//         case 6: return 'Суббота';
//         case 7: return 'Воскресенье';

//     }
// }
// console.log(week(5))

// function func(a, b){
//     if(a === b){
//         let result = (a + b) * 3
//         return result
//     } else {
//         let result = a + b
//         return result
//     }
// }
// console.log(func(7, 7))

// let names = ['Maksat', 'Vala', 'Nurlan', 'Aidar', 'Sanzhar']

// function checkUser(arr, name){
//     for(let i = 0; i < arr.length; i++){
//         let check = arr[i]
//         if(check === name){
//             return 'Da'
//         }
//     }
//     return 'Net'
// }
// console.log(checkUser(names, 'Aidar'))











