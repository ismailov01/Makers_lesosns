/// Методы Массивов (forEach, map, filter, reduce, indexOf, includes, every, some)


// forEach()
// let arr = ['boolean', 34, {}, true]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i], i, arr);
// }
// arr.forEach((item, index, array) => {
//     console.log(item, index, array);
// })

// map()
// let arr = [1, 2, 3, 4, 'a', 6]
// let newArr = arr.map(function (item, index, array) {
//     if(item === 'a'){
//         return 5
//     }
//     return item
// })
// console.log(newArr);

// filter()
// let numbers = [32, 2, 43, 10, 25]
// let newArr = numbers.filter(item => {
//     return item > 15    
// })
// console.log(newArr);

// let films = [
//     {
//         title: 'Ono',
//         genre: 'horror'
//     },
//     {
//         title: 'Venom',
//         genre: 'Fantasy'
//     },
//     {
//         title: 'Eki baatyr',
//         genre: 'comedy'
//     }
// ]
// console.log(films);
// function handleFilter(genre) {
//     let filteredArr = films.filter((item) => {
//        return item.genre === genre
//     })
//     console.log(filteredArr);
// }
// handleFilter('comedy')

// reduce()
// let arr = [2, 4, 10, 12]
// let result = arr.reduce((prevValue, currValue, index, array) => {
//     console.log(prevValue, currValue, index, array);
//     return prevValue + currValue
// })
// console.log(result);

// // indexOf
// let arr = [true, 1, 0, 'str']
// let result = arr.indexOf(0)
// console.log(result);

// function cut(elem){
//     let index = arr.indexOf(elem)
//     arr.splice(index, 1)
// }
// console.log(arr);
// cut('str')
// console.log(arr);

// includes()
// let arr = [10, 20, 'array']
// let result = arr.includes(20)
// console.log(result);

// some and every 
// let users = [
//     {
//         id: 1,
//         name: 'Sanzhar'
//     },
//     {
//         id: 1,
//         name: 'Bayel'
//     },
//     {
//         id: 1,
//         name: 'Atai'
//     }
// ]
// let result = users.every(item => item.id === 1)
// console.log(result);

// let arr = [1, 20, 30, -5]
// // let result = arr.every((item) => item > 0)
// let result = arr.some((item) => item > 0)
// console.log(result);


// // find
// let users = [
//     { id: 1, name: 'Sanzhar'},
//     { id: 1, name: 'Bayel'},
//     { id: 1, name: 'Atai'}
// ]
// let user = users.findIndex((item) => item.name === 'Atai')
// console.log(user);

// let arr = [-15, 10, 24, 36, 0]
// let newArr = arr.map((item) => item * 1.8 + 32)
// console.log(newArr);

// Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, у которых баллы больше 50.
// После отфильтровки начислить каждому студенту по 15 баллов в качестве поощрения.
// В конце посчитать средний балл студентов (используйте метод reduce()). 
// 
// let studentRecords = [
//     { name: 'John', id: 123, marks: 98 },
//     { name: 'Baba', id: 101, marks: 23 },
//     { name: 'John', id: 200, marks: 45 },
//     { name: 'Wick', id: 115, marks: 75 },
// ]
// let studentsFilter = studentRecords.filter(item => item.marks > 50)
// studentsFilter = studentsFilter.map(item => {
//     item.marks += 15
//     return item
// })
// let ave = studentsFilter.reduce((prev, student) => {
//     // console.log(prev, student);
//     return prev + student.marks
// },0)
// ave = ave / studentsFilter.length
// console.log(ave);



// let task4 = [4, 15, -4, 27, 12, 8];
// let funcFunc = (task4) => {
//   let max = task4[0];
//   task4.forEach((elem) => {
//     if (elem > max) {
//       max = elem;
//     }
//   });
//   return max;
// };
// console.log(funcFunc(task4));



// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// let newArr = task5.reduce((prev, curr) => {
//   prev < curr
//   return curr
// })
// console.log(newArr);



// let arr = [1,2, [4,5,6], [7,8]]
// let sum = 0
// let result = arr.reduce((prev, curr) => sum += curr)
// console.log(result) 






















