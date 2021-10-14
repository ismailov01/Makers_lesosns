// Регулярные выражения

// есть 2 способа создания регулярного выражения 

// const regexp1 = /coding/ //1 способ
// const regexp2 = new RegExp('coding')  // 2 способ

// const str = 'code is easy'
// let result = str.match(regexp1) || []
// console.log(result);

// if (result.length > 0){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// Флаги 

// i игнорирует регистр
// g с этим поиск ищет все совпадение, а если без него только первое

// let regexp = /code/gi;
// let str = 'code, bad Code'
// let result = str.match(regexp)
// console.log(result);

// метод строки match ищет и возвращает массив, если не найдено, то NULL

// let str = 'Работайте братья, работайте'
// let regexp = new RegExp('работайте', 'gi')
// let result = str.match(regexp)
// console.log(result);

// метод строки replace ищет совпадения и заменяет их 

// let str = 'Требуется миддл разработчик'
// let regexp = /миддл/ 
// let result = str.replace(regexp, 'джуниор')
// console.log(result);

// метод регулярного выражения test проверяет, етсь ли хоть одно совпадение, если да, то возвращает true, иначе false

// let str = 'We can'
// let regexp = /we/i 
// let result = regexp.test(str)
// console.log(result);

// \d цифра от 0-9
// \s пробелы 
// \w символ, точнее буквы(буквы латинсого алфавита) или _
// \D Не цифра, все кроме от 0-9
// \S Не пробел, всё кроме пробела
// \W все символы кроие букв латинского алфавита и _  и не фийра
// \. любой символ 

// let str = 'moding is easy'
// let regexp = /\w\w\w\w\w\w.\w\w\s\w\w\w\w/
// let result = str.match(regexp)
// console.log(result);

// Якоря 
// ^ - начало строки
// $ - конец строки

// let time = '20:12'
// let regexp = /^\d\d:\d\d$/
// let result = regexp.test(time)
// console.log(result);

// Наборы []

// let str1 = 'mad'
// let str2 = 'sad'
// let regexp = /\[ms]ad/; // mad, sad
// let result = str2.match(regexp)
// console.log(str2);

// Диапазоны 

// let str = '123456789'
// let regexp = /[1-9]/g
// let result = str.match(regexp)
// console.log(result);

// //[0-9] 
// //[a-z]
//  // [A-Z] 
// //  [а-я]
//  // [А-Я]

// Исключения 

// let regexp = /[^aeiou]/ // Все кроме этих букв

// Квантификаторы 

// {n} количество 

// let numbers = '12 555 34772'
// //  let regexp = /\d{3,4}/g
// // let regexp = /\d+/g
// // + озночает 1 или более символов
// let regexp = /\d?/
// let result = numbers.match(regexp)
// console.log(result);

// let str = 'color or colour'
// let regexp = /colou?r/g
// let result = str.match(regexp)
// console.log(result);

// скобочные группы 
// mail.ru 
// mail.gmail.ru

// let str = 'mail.gmail.ru'
// let regexp = /(\w+\.)+\w+/g
// let result = str.match(regexp)
// console.log(result);

// let str = 'brown, black, blue'
// let regexp = /[aieou]/gi
// let result = str.match(regexp)
// console.log(result.length);

// let str = '5 apples and 5 oranges'
// let result = str.replace(/\d/g, 'пять')
// console.log(result);

// Альтернация (или) "|"
// let str = 'I know Java, Python, Flutter, JavaScript, Dart'
// let regexp = /Java(Script)?|Python|Flutter|Dart/gi
// let result = str.match(regexp)
// console.log(result);


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


// let elevetor = {
//     floor: 1,
//     minFloor: 1,
//     maxFloor: 16,
//     printFloor: function() {
//         console.log(`Вы находитесь на ${this.floor} этаже`);
//     },
//     upOneFloor: function() {
//         if(this.floor < this.maxFloor){
//             this.floor++;
//             this.printFloor();
//         } else {
//             console.log(`Вы не можете подняться выше ${this.maxFloor} этажа`);
//         }
//     },
//     downOneFloor: function() {
//         if(this.floor < this.minFloor){
//             this.floor--;
//             this.printFloor();
//         } else {
//             console.log(`Вы не можете спуститься ниже ${this.minFloor} этажа`);
//         }
//     },
//     toFloor: function(num) {
//         if(num < this.minFloor || num > this.maxFloor){
//             console.log(`Такого этажа нет`);
//             return
//         }
//         if(num > this.floor){
//             while(this.floor !== num) {
//                 this.upOneFloor()
//             }
//         } else if(num === this.floor){
//             console.log(`Мы уже находимся на ${num} этаже`);
//         }
//         else {
//             while(this.floor !== num) {
//                 this.downOneFloor()
//             }
//         }
//     }
    
// }
// elevetor.toFloor()



let str = '24.00'
let regexp = /\d\d:\d\d/
let result =   (regexp)
console.log(result)





























