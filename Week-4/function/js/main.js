// 1
// function showMassege(massege){
//     console.log(message);
// }
// showMassege('Makers Bootcamp!')
// showMassege('Javascript')
// 2
// function calcMultiply(a, b){
//     return a * b
// }

// let result = calcMultiply(5, 6)
// console.log(result);


// //1
// let showMassege = function(massege){
//     console.log(massege);
// }

// showMassege('Hello world!')

// console.log(calcMultiply(2, 7));

// var calcMultiply = function(a, b){
//     return a * b
// }


// hosting
// console.log(a);
// console.log(b);
// var a = 'Makers'
// let b = 'Bootcamp'


// scope  
// let count = 0;
// let count = 10    
// function counter(){
//     console.log(count);
// }
// counter()

// let personName = 'Kuba'
// function func(){
//     let personName = 'Kubat'
//     function func2(){
//         let personName = 'Aidai'
//         console.log(personName);
//     }
//     func2()
// }
// func()

// function checkSum(){
//     let a = +prompt('Enter first number')
//     let b = +prompt('Enter second number')
    
//     let sum = a + b
// if(sum === 15){
//     alert('Summa ravna 15')
// } else if(sum < 15){
//     alert('Summa menshe 15')
// }else {
//     alert('Summa bolshe 15')
// }

// }
// checkSum()

// function sumFunc(){
//     console.log('Hello world');
// }
// let newFunc = sumFunc
// console.log(newFunc);

// function calcSum(a, b=10){
//     return a + b
// }
// // console.log(calcSum(null, 8));
// console.log(calcSum(2));

function someFunc(a, b, c, d, e){
    // console.log(a, b, c, d, e);
    // console.log(...arguments);
    let arr = [...arguments]
    // for(let i = 0; i < arr.length; i++){
    //     console.log(arr[i]);
    // }
    for(i of arr){
        console.log(i);
    }
}
someFunc('Hello', false, 25, [], {})


