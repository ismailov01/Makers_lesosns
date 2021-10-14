// Простые методы массивов

// push, pop, shift, unshift

// let arr = [1, 2, 3]

// arr.push(4) // добовляет в конец
// console.log(arr);
// let num = arr.pop() // вырезает один элемент с конца
// arr.pop()
// console.log(arr)
// console.log(num);

// let arr = ["Kyrgyzstan", "Uzbekistan", "Russia"]

// arr.unshift("china") // добавляет в начало
// console.log(arr);

// let country = arr.shift() // Вырезает один элемент с начала
// console.log(arr);
// console.log(country);


// splice, slice
// let nums = [22, 40, 38, 50]

// let res = nums.splice(0, 1, '1')
// console.log(nums)
// console.log(res)                                                                                                      
// массив.splice(с какого начать, сколько вырезать,что вставить)

// let arr = [100, 31, 47, 68]
// let num = arr.slice(1) //массив .slice(с какого начать, по какой включительно) и не изменяет исходный массив
// console.log(arr);
// console.log(num);

// let arr = [1, 2, 3, 4, 5]
// // arr.reverse()
// let str = arr.join("") // из массива делает строку
// console.log(str);
// console.log();

// let newArr = str.split('') //из строки делает массив
// console.log(newArr);

// let arr = [1, 2, 30, 11, 101, 22, 86]
// arr.sort()
// arr.sort((a,b) => a - b)
// arr.sort((a,b) => b - a)
// console.log(arr);

// concat 
// let res1 = [1, 2, 3]
// let res2= [4, 5, 6]


// let result = res1.concat(res2, ["str", "boolean"])
// console.log(result);

// let myArray = ['kuba', 'atai', 'luiza', 'malik', 'maks']
// let str = myArray.join('') 
// str[1].toUpperCase()

 
// console.log(str);




// for(let i = 0; i < myArray.length; i++){
//     myArray.splice(i, 1, [myArray[i], i])
//     console.log(myArray[i]);
// }

// let mixedUsers = [
//     {
//         role: 'user'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role:'admin'
//     },
//     {
//         role: 'user'
//     },
//     {
//         role: 'user'
//     }
// ]

// let admins = []
// let users = []

// for(let i = 0;i < mixedUsers.length; i++){
//     if(mixedUsers[i].role === 'admin'){
//         admins.push(mixedUsers[i])
//     }
//     else if(mixedUsers[i].role === 'user'){
//         users.push(mixedUsers[i])
//     }
// }
// console.log(admins, users)

// let products = [
//     { size: 's'},
//     { size: 's'},
//     { size: 's'},
//     { size: 's'},
//     { size: 'l'},
//     { size: 'l'},
//     { size: 'l'},
//     { size: 'l'},
//     { size: 'm'},
//     { size: 'm'}
// ]
// let ska = []
// let lka = []
// let mka = []

// for(let i = 0; i < products.length; i++){
//     if(products[i].size === 's'){
//         ska.push(products[i])
//     } else if(products[i].size === 'l'){
//         lka.push(products[i])
//     } else if(products[i].size === 'm'){
//         mka.push(products[i])   
//     }
// }
// console.log(ska);
// console.log(lka);
// console.log(mka);


// let arr = ['a', 'b', 'c']
// let arr1 = arr.slice(0,1)
// for(i = 0; i < arr.length; i++){

// }
// console.log(arr);


































