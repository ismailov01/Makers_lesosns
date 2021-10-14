// arrow function 

// let arrowFunc = () => {
//     console.log('Hello world');
// }
// let arrowFunc = () => console.log('Hello world')


// let arrowFunc = (arg1, arg2) => arg1 + arg2

// let arrowFunc = arg1 => console.log(arg1);

// arrowFunc(7)

// let arrowFunc = (a, b, c) => {
//     console.log(...arguments);
// }
// arrowFunc(true, 23, 'Makers')

// object metods

// let person = {
//     name: 'John',
//     age: 22,

//     sayHello(){
//         console.log('Hello world!');
//     },

//     sayName: function(){
//         console.log(`My name is ${this.name}`);
//     },

//     sayAge: () => console.log(`I am ${this.age} years old`)
// }
// // person.sayHello()
// // person.sayName()
// // person.sayAge()

// let person2 = {...person}
// // console.log(person2);
// person2.name = 'Kuba'
// person2.sayName()


// let obj1 = {
//     name: 'Kuba',
//     age: 20
//     obj2: {
//         name: 'Kani',
//         sayName: () => {
//             console.log(`${this.name}`);
//         }
//     }
// }
// obj1.obj2.sayName()

// alert('qwerty')
// console.log(this);
// window.alert('Hello')

// let obj1 = {
//     alert(a){
//         console.log(a + 'OBJ1');
//     },
//     hello: function() {
//         let obj2 = {
//             alert(a){
//                 console.log(a + 'OBJ2');
//             },
//             hello2: function() {
//                 this.alert('ALERT')
//             }
//         }
//         obj2.hello2()
//     }
// }
// obj1.hello()




        
// Стрелочные функции, методы объектов, this. Классная работа

// Задание №1
// Создайте стрелочную функцию, которая принимает 2 аргумента и  возвращает сумму всех аргументов.

// let arrowFunc = (a, b) => a + b;
// console.log(arrowFunc(5, 5));


// Задание №2
// Создайте объект user со свойствами name, surname и age.



// Задание №3
// Создайте у объекта user метод SayHi, который будет выводить в консоль “Hello World”.

// Задание №4
// Создайте метод у объекта user, который будет выводить в консоль  его возраст.

// Задание №5
// Создайте метод у user, который будет возвращать полную информацию. Например: Homer Simpson 40

// Задание №6
// Сделайте 3 и 4 задание используя this.

// let user = {
//     name: 'John',
//     surname: 'Snow',
//     age: 27,
//     sayHi: () => {
//         console.log('Hello world');
//     },
//     sayAge: function(){
//         console.log(this.age);
//     },
//     sayInfo(){
//         console.log(`${this.name} ${this.surname} ${this.age}`);
//     }
// }
// user.sayHi()
// user.sayAge()
// user.sayInfo()


// Стрелочные функции, методы объектов, this.  Домашняя работа.

// Группа C ======================================================
// Задание №1
// Перепишите данную функцию в стрелочную функцию.
// function showFirstMessage() {
//     console.log("Hello World!");
// }
// showFirstMessage()

// let showFirstMessage = () => console.log('Hello World!');
// showFirstMessage()

// Задание №2
// Напишите стрелочную функцию birthday которая будет принимать age и name,
// и будет поздравлять этого человека.

// let arrowFunc = (age, name) => {
//     console.log(`${name} Heppy ${age}th birthday!`)
// }
// arrowFunc(20, 'Kuba')

// Задание №3
// Дан массив с именами, добавьте is cool в конец каждой имени.

// let arr = ['Kuba', 'Luiza', 'Adelina', 'Dayana']
// let coolName = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         arr[i] += ' is cool'
//     }
//     return arr
// }
// console.log(coolName(arr));

// Задание №4
// Реализуйте стрелочную функцию, принимающую строку и инвертирующую ее.
// Например, строка «JavaScript» должна стать строкой «tpircSavaJ».

// let str = "JavaScript"
// let arrowRev = (str) => {
//     return str.split( '' ).reverse( ).join( '' );
// }
// console.log(arrowRev(str));

// Задание №5
// Реализуйте стрелочную функцию, принимающую строку и символ и возвращающую количество символов в строке.
// Например, если мы передаем «JavaScript» и «a», то должны получить 2 (в строке «JavaScript» две буквы «a»).


// let func = (str, symbol) => {
//   let sum = 0
//   for(let i = 0; i < str.length;i++){
//     if(str[i] === symbol){
//       sum++
//     }
//   }
//   return sum
// }
// console.log(func('JavaScript', 'a'));


// Группа B ======================================================

// Задание №6
// Дан массив array = [1, 2, 3, 4, 5], при помощи стрелочных функций реализуйте пункты a и b.
// a) умножьте каждый элемент массива на 5.
// b) отфильтруйте массив по четным числам.

// let array = [1, 2, 3, 4, 5]
// let sum = 5
// let culcFunc = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         sum *= arr[i]
//         console.log(sum);
//     } 
// }
// calcFunc([1, 2, 3, 4, 5])


// Задание №7
// Создайте стрелочную функцию с одним аргументом,
// если в этом аргументе хранится строка “User” выведите
// alert Hello User, иначе выведите alert “Error” .

// let userFunc = (str) => {
//     if(str === "User"){
//         alert(`Hello ${str}`)
//     } else {
//         alert('Error')
//     }
// }
// userFunc("User")


// Задание №8
// Функция принимает параметр min.
// В нем лежит число от 0 до 59.
// Функция должна возвращать в какую четверть
// часа попадает это число (в первую, вторую,
// третью или четвертую).

// let minFunc = (min) => {
//     if(min > 0 && min <= 15){
//         return 'В первую'
//     }
//     else if(min > 15 && min <= 30){
//         return 'Во вторую'
//     }
//     else if(min > 30 && min <= 45){
//         return 'В третью'
//     }
//     else if(min > 45 && min <=60){
//         return 'В четвертую'
//     }
// }
// console.log(minFunc(16));


// Задание №9
// Функция принимает количество часов (проверить
// что это число). Функция возвращает
// количество секунд в переданых часах.

// let hour = +prompt('Enter qountied hour')
// let func9 = (hour) => {
//     let second = hour * 3600
//     return second + 'c'
// }
// console.log(func9(hour));



// Задание №10
// В функцию передаются переменные first и second.
// Проверьте, что first делится без
// остатка на second. Если это так - возвращаете true,
// иначе возвращаете false.

// let checkNum = (first, second) => {
//     if(first % second === 0){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(checkNum(5, 4));

// Группа A ======================================================

// Задание №11
// Создайте два объекта со свойствами language и framework.
// Затем, отдельно создайте функцию describe() который выводит свойства объектa.
// Примените describe() этим двум объектам.

// let obj = {
//     language: 'Russian'
// }
// let obj1 = {
//     framework: 'Bootstrap'
// }
// let discribe = () => console.log(obj.language, obj1.framework);
// discribe(obj.language)
// discribe(obj1.framework)

// Задание №12
// Создайте объект group со свойствами title и students. Свойство students будет
// хранить масив с именами студентов. Так же реализуйте метод showList() который будет выдавать alert
// на title и на имя каждого студента.

// let jsFull = {
//   title: ' - student',
//   students: ['Erlan', 'Ravshan', 'Atai'],
//   showList() {
//     for (let i = 0; i < jsFull.students.length; i++) {
//       alert(jsFull.students[i] + jsFull.title);
//     }
//   },
// };
// jsFull.showList();


// Задание №13
// Создайте объект person со свойством name, реализуйте метод introduce() который будет выдавать
// имя объектa

// let person = {
//     name: 'Kuba',
//     introduce() {
//         alert(`${this.name}`)
//     }
// }
// person.introduce()

// Задание №14
// Создайте любой объект с несколькими свойствами и один метод который будет выдавать в консоле
// все ключи и значения этого объект.

// let obj = {
//     name: 'Ravshan',
//     lastName: 'Baimatov',
//     age: 19,
//     showStudent() {
//         for (let key in obj) {
//             console.log(key, obj[key]);
//           }
//     }
// }
// obj.showStudent()


// Задание №15
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

// const Elevator = {
//     floor: 1, 
//     toFloor: function(n) {
//       this.printFloor();
//       do {
//         if (n < this.floor) {
//           this.downOneFloor();
//         } 
//         else if (n > this.floor) {
//           this.upOneFloor();
//         } 
//         this.printFloor();
//       } while (this.floor !== n); 
//     },
//     printFloor: function() {
//       console.log('Elevator is on the floor ' + this.floor)
//     },
//     upOneFloor: function() {
//       if (this.floor < 16) {
//         this.floor++;
//       } else {
//         console.log('You are already on the last floor');
//       }
//     },
//     downOneFloor: function() {
//       if (this.floor > 1) {
//         this.floor--;
//       } else {
//         console.log('You are already on the first floor');
//       }
//     }
//   };
//   Elevator.toFloor(4);


// Стрелочные функции, методы объектов, this. Экстра задания

// Задание №1
// Создайте функцию которая выводит в консоль все аргументы
// P.S. используйте [...arguments]

// function argFunc(a, b, c, d) {
//     console.log(...arguments);
// }
// argFunc(true, 'Kuba', 20, 'Makers')

// Задание №2
// Фаренгейт. Напишите функцию которая конвертирует градусы Цельсия в градусы
// Фаренгейта.
// C-температура в цельсиях,
// F-температура в фаренгейтах,
// F=1.8*C+32,

// let num = +prompt('Введите градусы C')
// let converter = (C) => {
//     F = 1.8 * C + 32
//     return F + '-температура в форенгейтах'
// }
// console.log(converter(num));

// Задание №3
// Объявите объект job со свойствами position, paid, isAvailable, showDetails().
// isAvalable хранит булевое значение, в случае true будет выдаваться
// 'currently it is available', а если false то 'curruntly it is not available'.
// А showDetails() должен описывать данный объект.
// Создайте несколько объектов с помощью метода Object.create().

// let job = {
//     position: 'absolute',
//     paid: 'for',
//     isAvailable: true,
//     showDetails(){
//         if(this.isAvailable === true){
//             console.log('currently it is available');
//         } else {
//             console.log('curruntly it is not available');
//         }
//         for(let i in job){
//             console.log(i, job[i]);
//         }
//     }
// }
// job.showDetails()
































































