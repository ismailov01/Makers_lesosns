// Логические операторы
// console.log(true && true)
// console.log(true && false)
// console.log(true && 'a')

// console.log(true || true)
// console.log(true || false)
// console.log(false || false)
// console.log(false || false)

// console.log(!!true)
// console.log(!!false)

// console.log(true && true ||false && !false)
// console.log(true || !true && false ||false)
// console.log(!false && !true || !true)
// console.log(false || !false && !!true)

// Условные опертаоры

// let num1 = 140
// let num2 = 141

// if(num1 === num2) {
//     console.log('num1 === num2')
// } else if(num1 > num2){
//     console.log('num1 > num2')
// } else if(num1 < num2) {
//     console.log('num1 < num2')
// }
//  else {
//     console.log('Не подошло')
// }

// const value = 'Hello'
// const number = 50

// if (value === 'Hello') {
//     console.log("Hello world")
// } 
// if(number > 50) {
//     console.log('Number > 50')
// } else if(number < 50) {
//     console.log('number < 50')
// } else {
//     console.log('number === 50')
// }

// let sum = 100 
// let result = 201

// if(sum === 100 || result === 200) {
//     console.log('YES')
// } else {
//     console.log('NO')
// }

// Тернарный оператор 

// let user1 = "Ulan"
// let user2 = "Ulan"

// user1 === user2 ? console.log('Если условие будет true') : console.log('Если условие будет false');

// let num = 1 
// let num2 = 2

// num < num2 && 10 > 11  ? alert(true) : alert(false);

// 0 || !1 && -1 ? console.log(true) : console.log(false);


// Оператор switch

// let str = "College"

// switch (str) {
//     case "School": 
//     console.log('GOOD')
//     break;
//     case "Bootcamp": 
//     console.log('BOOTCAMP')
//     break;
//     default: 
//     console.log('College')
//     break;
// }

// let code = prompt('Введи тег h1')

// switch(code) {
//     case '<h1></h1>':   
//         alert('Правильно ввели')
//         break;
//         case 'h1': 
//         alert('Почти правильно')
//         break;
//         default:
//             alert('Повтори заголовки')
//             break;
// }

// let temp = +prompt('Введите температуру')

// temp < 0 ? console.log(`Температура воздуха опуститься до ${temp} градусов`) : console.log(`Температура воздуха поднимется до ${temp} градусов`);

// if(temp > 0) {
//     console.log(`Температура воздуха поднимется до +${temp} градусов`)
// } else if(temp < 0) {
//     console.log(`Температура воздуха опуститься до ${temp} градусов`)
// }

// let min = +prompt('Введите число')
// if (min > 0 && min < 15) {
//     console.log('Первая')   
// }else if(min >= 15 && min < 30){
//     console.log('Вторая')
// }else if(min >= 30 && min < 45 ) {
//     console.log('Третья')
// }else if(min >= 45 && min < 60){
//     console.log('Четвертая')
// }


let count = 0
let summ = 0;

while (true) {
    const value = prompt("Введите число")
    if (isNan(+value)) break;
    summ += value;
    count ++;
}

alert(summ, summ/count)







