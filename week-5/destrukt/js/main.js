// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Butter',
//     'Bread'
// ]

// // console.log();

// let [first, second, ...other] = list
// console.log(first, second, other);

// let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ]

// let [[a, b, c, d], newArr] = arr
// console.log(a, b, c, d, newArr);

// let person = {
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'
// }

// let {age, name, lastName} = person
// console.log(name, age, lastName);

// let obj1 = {
//     subObj: {
//         name: 'Jack'
//     }
// }

// let {subObj: {name}} = obj1
// console.log(name);

// let obj = {
//     arr: [
//         {
//             name: 'Makers'
//         }
//     ]
// }
// let {arr: [{name}]} = obj
// console.log(name);

// function foo({name, age}){
//     console.log(name);
//     console.log(age);
// }
// let person = {
//     name: "Makers",
//     lastName: 'BootCamp',
//     age: 2
// }

// foo(person)

// let arr = [1, 2, 3, 4, 5]
// let [,,,,a] = arr
// console.log(a);

// function foo([...rest]) {
//     console.log(...rest);
// }

// let arr = [1, 2, 3, 4, 5]
// foo(...arr)

// let a = {
//     age:20
// }
// // let b = {
// //     age:20
// // }

// let b = {...a}

// let obj1 = {
//     name: 'Kani',
//     color: 'black'
// }
// let obj2 = {
//     lastName: 'East',
//     color: 'pink'
// }

// let {color} = obj1
// let newobj = {color, name, ...obj2}
// console.log(newobj);

// let obj = {
//     name: 'Kani',
//     age: 22,
//     posititons: [
//         'Mentor',
//         'B-dev',
//         'F-dev',
//         'Blogger'
//     ],
//     dog: {
//         name: 'Oreo',
//         age: 2
//     }
// }

// let {name, age} = obj

// let {
//     name,
//     age,
//     posititons: [
//         firstPosition,
//         secondPosition,
//         ...otherPositions
//     ],
//     dog: {
//         name: dogName,
//         age: dogAge
//     }
// } = obj

// console.log(name, age, firstPosition, secondPosition, otherPositions, dogName, dogAge);

// function sayHello({name, age, dog: {name: dogName}}) {
//     console.log(`
//     Hello, my name is ${name}
//     I am ${age} y.o.
//     I have a dog ${dogName}`);
// }

// sayHello(obj)

// поверхностное и глубокое копирование объектов

// let user = {
//     name: 'Aisultan',
//     age: 20,
//     languages: {
//         english: '2 level',
//         french: '3 level'
//     }
// }
// // let newUser = user
// // let newUser = Object.assign({}, user)  // поверхностное копирование
// let newUser = {...user}  // поверхностное копирование, spread оператор
// newUser.name = 'Aibek';
// newUser.languages.english = '6 level'
// console.log(user);
// console.log(newUser);

// let product = {
//     title: 'T-shirt',
//     price: {
//         s: 3000,
//         m: 4000,
//         l: 2000
//     }
// }

// let newProduct = JSON.parse(JSON.stringify(product)) /// Глубокое копирование
// newProduct.price.s = 10000
// console.log(product);
// console.log(newProduct);
// let str = JSON.stringify(product)
// let obj = JSON.parse(str)
// console.log(str);
// console.log(obj);

// // Деструктуризация
// let student = {
//     name: 'Melis',
//     lastName: 'Ismailov'
// }
// // let name = student.name
// // let lastName = student.lastName
// let name = 'Sanzhar'
// let {name: studentName, lastName} = student
// console.log(studentName, lastName);

// let arr = ['true', 10, null]
// // let boolean = arr[0]
// let [boolean, , type, ...rest] = arr
// let [first, second] = rest
// console.log(boolean, typ, rest);

// let obj = {
//     name: 'MArket Place',
//     frameworks: ['React', 'Django API'],
//     versions: {
//         legacy: [2011, 2012, 2013]
//     }
// }
// let {frameworks:[react]} = obj
// console.log(react);
// let {versions:{legacy:[, year]}} = obj
// console.log(year);
// let {name: projectName} = obj
// console.log(projectName);

// let product = {
//     // title: 'Pencil',
//     price: 100,
// }
// let {title = 'Pencil'} = product
// console.log(title);

// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.

// let obj = {
//     name: 'John',
//     age: '22'
// }
// let {name = prompt('Enter name'), age = prompt('Enter age')} = obj
// console.log(name, age);

// function func([first, second]) {
//     console.log(first, second);
// }
// func([1, 2, 3, 4, 5])

// function func({name = 'default', lastName = 'default', age = 'default'}) {
//     console.log(name, lastName, age);
// }
// let user = {
//     name: 'Kuba',
//     lastName: 'Ismailov',
//     age: 21
// }
// func(user)

// Вам дан объект с информацией о книге. С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

// const courseCatalogMetadata = [
//   {
//     title: "The Hobbit, or There and Back Again",
//     description:
//       "The hobbit tells a fantastic story of adventure, danger, friendship, and courage",
//     texts: [
//       {
//         author: "J. R. R. Tolkien",
//         price: 120,
//         ISBN: "912-6-44-578441-0",
//       },
//     ],
//   },
// ];

// let [
//   {
//     texts: [{ ISBN: number }],
//   },
// ] = courseCatalogMetadata;
// console.log(number);

// let firstName = 32
// let lastName = 'Michael'
// let age = 'Jackson'
// [firstName, lastName, age] = [age, firstName, lastName]
// console.log(firstName, lastName, age)














