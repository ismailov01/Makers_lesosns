// замыкание

// function init(){
//     let name = 'Adilet' 
//     return function () {
//         console.log(name);
//     }
// }
// let names = init()
// names()

// function words(arg1){
//     return function (arg2) {
//         console.log(arg1, arg2);
//     }
// }
// let hello = words('Hello')
 
// let count = words('')

// function sum(num1){
//     console.log(num1);
//     return function (num2){
//         console.log(num1 + num2)
//     }
// }
// let sum1 = sum(10)
// sum1(20)
// sum(20)(40)

// замыкание - это когда дочерняя функция замкнута на лексичесом окружении родительской функции


//// Рекурсия

// let result = 0
// function toSum(num){
//     for(let i = num; i >= 1; i--){
//         result += i
//     }
// }
// toSum(5)
// // console.log(result)

// function toSum(num) {
//     if(num <= 1) return num  // точка выхода
//     return num + toSum (num - 1) // 

// }
// let result = toSum(5)
// console.log(result);


// function finder(arr){
//     if(arr.length < 1) return 0
//     let currentNum = arr.splice(0, 1)
//     console.log(arr));
//     return currentNum[0] === 1 ? 1 + finder(arr) : finder(arr)
// }
// let count = finder([1, 2, 22, 4, 1, 1])
// console.log(count)

// function func(arr){
//     if(arr.length < 1) return 0
//     let currentNum = arr.splice(0, 1) 
//     return typeof currentNum[0] === "number" ? currentNum[0] + func(arr) : func(arr)
// }
// let count = func([true, 7, 2, 'Hello'])
// console.log(count);


// function dan(arr) {
//     if(arr.length < 1) return 0
//     let findElem = arr.splice(0, 1)
//     if(typeof (findElem[0]) === "number"){
//         return findElem[0] += dan(arr)
//     }
//     else {
//         return dan(arr)
//     }
// }
// console.log(dan([true, 7, 2, 'Hello']));

// function fib(num){
//     if(num <= 2){
//         return 1
//     }
//     return fib(num-1) + fib(num-2)
// }
// console.log(fib(10));

// let count = 0
// function checkLetter(word, letter){
//     for(let i = 0; i < word.length; i++){
//         if(letter === word[i]){
//             count++
//         }
//     }
//     return count
// }
// console.log(checkLetter('hello', 'l'));

// function getDirection(str){
//     let sideX = 0
//     let sideY = 0
//     if(str.length !== 10) return false;
//     for (let i = 0; i < str.length; i++) {
//         switch(str[i]){
//             case 'с': sideX++;
//             break;
//             case 'ю': sideX--;
//             break;
//             case 'з': sideY++;
//             break;
//             case 'в': sideY--;
//             break;
//             default: return console.log('Error');
//             break
//         }
        
//     }
//     console.log(sideX);
//     console.log(sideY);
//     return sideX === 0 && sideY === 0 ? true : false;
// }
// console.log(getDirection('сюсюсюзвзв'));

// let str = 'мадам'

// function checkPalindrome(str){
//     let arr = str.split("")
//     let reversed = arr.reverse().join("");
//     if(reversed === str){
//         console.log('Палиндром');
//         return false
//     }
//     else{
//         console.log('не Палиндром');
//         return false
//     }

// }
// checkPalindrome('мадам')


// function task1(num){
//     for(let i = num; i > 0; i--){
//         console.log(i);
//     }
    
// }
// let num1 = task1(5)


// function task2(arr, n = 0) {
//     if (n === arr.length) return;
//     console.log(arr[n]);
//     task2(arr, n + 1);
// }

// let arr = ["hello", 25, true, {}];        
// task2(arr);


// function numFact(n) {
//     return (n != 1) ? n * numFact(n - 1) : 1;
//   }
  
//   let fact = numFact(6)
//   console.log(fact);


// function checkSum(a){
//     return function (b){
//         return a + b
//     }
// }
// let num1 = checkSum(3)(4)
// console.log(num1);


// function func(){
//     let i = 1
//     return function(){return i++}
// }
// let count = func()
// console.log(count());
// console.log(count());


// let n = +prompt('Enter number')
// function checkNum(num){
//     for(let i = 0; i < num; i++){
//         if(i % 2 != 0){
//             console.log(i);
//         }
//     }
// }
// checkNum(n)





