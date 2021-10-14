
// Замыкание и рекурсия. Классная работа.

// Задание №1
// Создайте функцию, которая будет запрашивать
// у пользователя число, затем возвращать в
// консоли сумму всех чисел от введенного
// числа до 1.
// Например:
//    Ввод: 5
//    Вывод: 5 + 4 + 3 + 2 + 1 = 15

// let request = +prompt('Enter number')
// function recSum(num){
//     if(num === 1) return 1;

//     return num + recSum(num-1)
// }

// console.log(recSum(request));


// Задание №2
// 	Создайте функцию, которая запрашивает у
// пользователя число(в качестве порядкового
// числа по Фибоначи), затем выводит в консоли
// число Фибоначи по этому порядку.
// Например:
//    Ввод: 10;
//    Вывод: 55
// Числа Фибоначчи (ссылка):
// https://shorturl.at/cvE17

// function fib(n){
//     if(n > 1){
//         return fib(n-1) + fib(n-2)
//     } else {
//         return n
//     }
// // }
// function fib(n){
//     return n > 1 ? fib(n-1) + fib(n-2) : n
// }
// console.log(fib(10));

// Задание №3
// Создайте функцию, которая преобразовывает
// многомерный массив arr в одномерный массив.
// При помощи рекурсии!

// let arr = [1, [true], [[3], ["hello"]]];
// // Вывод: [1,true,3,'hello'];

// let newArr = []

// const arrToFloat = function(arr, i=0){
//     if(i === arr.length) return;
//     if(Array.isArray(arr[i])) arrToFloat(arr[i])
//     else newArr.push(arr[i])
//     arrToFloat(arr, i+1)
// }
// arrToFloat(arr)
// console.log(newArr);

// Задание №4
// Создайте функцию, которая будет проверять - чётное ли число, или нечетное? В случае если число чётное - верните True, если нечётное - False

// function checkNum(num){
//     if(num % 2 === 0) return true
//      else return false
// }
// console.log(checkNum(234))



// Например
// console.log(recEven(234)); // выведет true
// console.log(recEven(-45)); // выведет false
// console.log(recEven(37)); // выведет false











