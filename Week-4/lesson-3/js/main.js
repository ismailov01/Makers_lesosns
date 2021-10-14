// стрелочные функции

// const arrowFunc = () => {
//     console.log('Arrow');
// }

// const arrowFunc = () => console.log('Arrow');
// const arrowFunc = arg => console.log(arg);
// arrowFunc(10)

// function func() {
//     console.log(...arguments);
// }

// const func = () => {
//     console.log(arguments);
// }
// func('str', 10, false)


// let km = +prompt('Enter km')
// const converter = (arg) => {
//     let m = arg * 1000;
//     alert(`${m} м`)
// }
// converter(km)

// методы объектов 

// console.warn('Method');
// console.error('HP')
// console.log('LOG')


// let user = {
//     name: 'Kuba',
//     sayHello: function(arg) { // function expression
//         console.log(`Hello ${arg}`);
//     },
//     sayHello(arg) { // function dicloration
//         console.log(`Hello ${arg}`);
//     },
//     sayHello: (arg) => {                /// arrow function
//         console.log(`Hello ${arg}`);
//     },
// }
// user.sayHello('Kuba')
// user.sayHello('Brat')

// this

// let room = 19;

// function stop() {}

// function alert()  {}


// console.log(this);

// let obj = {
//     title: 'JS13',
//     sayContext() {
//         console.log(this);
//     },
//     sayContextArrow = () => {
//         console.log(this);
//     },
//     func() {
//         let arrowFunc = () => {
//             console.log(this);
//         }
//         arrowFunc()
//     }
// }
// obj.sayContext()
// obj.sayContextArrow()
// obj.fanc()

// let user = {
//     name: 'Erlan',
//     sayName: function (){
//         console.log(this.name);
//     }
// }
// let newUser = {...user}
// newUser.name = 'Islam'
// user.sayName()
// console.log(newUser);
// newUser.sayName()

// let passenger = {
//     firstName: 'Sam',
//     lastName: 'Winchester',
//     passportNum: 'US12345678',
//     baggage: 20,
//     getInfo() {
//         console.log(`Passenger ${this.firstName} ${this.lastName}. Passport number ${this.passportNum}. Maximum luggege weight is ${this.baggage}kg`);
//     },
//     setBaggage(arg) {
//        this.baggage = arg
//     }
// }
// passenger.getInfo()
// passenger.setBaggage(30)
// passenger.getInfo()

// Дан объект user. Напишите метод byTicket для этого объекта.
// При вызове метода количество билетов должно увеличиваться на единицу, при условии,
// что у пользователя будет достаточно средств на балансе.
// Также, с баланса должна сниматься стоимость билета (400).
// Если на счету недостаточно средств вывести соответствующее сообщение.


// let user = {
//     name: 'Sam',
//     age: 17,
//     balance: 700,
//     tickets: 0,
//     byTicket(count) {
//         if(this.balance >= 400 * count){
//             this.tickets += count;
//             this.balance -= 400 * count;
//             console.log(`Вы успешно купили ${count} билет(ов)!`);
//         }else {
//             let avaTicket = Math.floor(this.balance / 400);
//             if(avaTicket > 0){
//                 this.balance -= 400 * avaTicket;
//                 this.tickets += avaTicket;
//                 console.log(`У вас недостаточно средств купить ${count} билет(ов). Вы успешно купили только ${avaTicket} билет(ов)!`);
//             } else {
//                 alert('У вас недостаточно средств')
//             }
//         }
//     },
//     addToBalance(sum) {
//         this.balance += sum
//         console.log(`Вы успешно пополнили ваш баланс на ${sum}`);
//     },
//     showBalance() {
//         console.log(`Ваш баланс ${this.balance}`);
//     }
// }
// user.byTicket(10)
// user.addToBalance(1000)
// user.showBalance()









































