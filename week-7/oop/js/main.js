// let person1 = {
//     name: 'John',
//     lasName: 'Snow',
//     age: 29,
//     sayHello(){
//         console.log(`Hello my name is ${this.name}${this.lasName}`);
//     }
// }

// console.log(person1);
// person1.sayHello()

// let person2 = {
//     name: 'Emily',
//     lasName: 'Brown',
//     age: 22,
//     sayHello(){
//         console.log(`Hello my name is ${this.name}${this.lasName}`);
//     }
// }
// person2.sayHello()

// function Person(name, lastName, age){
//     this.name = name
//     this.lastName = lastName
//     this.age = age

// }

// Person.prototype.sayHello = function() {
//     console.log(`Hello my name is ${this.name}${this.lastName}`);
// }

// Person.prototype.sayAge = function() {
//     console.log(`I am ${this.age}y.o`);
// }

// let person1 = new Person('John', 'Snow', 29)
// let person2 = new Person('Emily', 'Brown', 22)
// person1.sayHello()
// console.log(person1);
// console.log(person2);
// person2.sayAge()

// class Person {
//     constructor(name, lastName, age){
//         this.name = name
//         this.lastName = lastName
//         this.age = age
//         Person.count++
//     }
//     sayHello(){
//         console.log(`Hello my name is ${this.name}${this.lastName}`);
//     }
//     sayAge(){
//         console.log(`I am ${this.age}y.o`);
//     }
//     static countOfobj(){
//         console.log(Person.count);
//     }
// }
// Person.count = 0

// let person1 = new Person('Kuba', 'Ismailov', 21)
// let person2 = new Person('Kuba1', 'Ismailov', 22)
// let person3 = new Person('Kuba2', 'Ismailov', 23)

// console.log(person1);
// // console.log(person1.count);
// // console.log(Person.count);
// Person.countOfobj()
// person1.sayHello()
// person1.sayAge()

// class Person {
//         constructor(name, lastName, age){
//             this.name = name
//             this.lastName = lastName
//             this.age = age
//             Person.count++
//         }
//         sayHello(){
//             console.log(`Hello my name is ${this.name}${this.lastName}`);
//         }
//         sayAge(){
//             console.log(`I am ${this.age}y.o`);
//         }
//         static countOfobj(){
//             console.log(Person.count);
//         }
//     }



// class Mentor extends Person {
//     constructor(name, lastName, age, position, type){
//         super(name, lastName, age)
//         this.position = position
//         this.type = type
//     }
//     work(){
//         console.log(`I am a ${this.type} ${this.position}`);
//     }
// }

// let mentor1 = new Mentor('Kuba', 'Ismailov', 21, 'Mentor', 'Java')
// console.log(mentor1);
// mentor1.sayAge()
// mentor1.sayHello()
// mentor1.work()

class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    saySound() {
        console.log('I am an animal');
    }
    static sayBye(){
        console.log('This is static - BYE!');
    }
}

// let dog = new Animal('Maks', 4)
// console.log(dog);
// dog.saySound()

// class Dog extends Animal{
//     constructor(name, age, voice){
//         super(name, age)
//         this.voice = voice
//     }
//     sayVoice(){
//         console.log(`${this.voice}`);
//     }
// }

// let dog = new Dog('Maks', 4, 'Gav')
// console.log(dog);
// dog.saySound()
// dog.sayVoice()

// class Cat extends Dog{
//     constructor(name, age, type){
//         super(name, age)
//         this.type = type
//     }
//     sayType(){
//         console.log(`${this.type}`);
//     }
// }

// let cat = new Cat('cola', 2, 'british')
// console.log(cat);
// cat.saySound()
// cat.sayType()

// class User {
//     constructor(password, username){
//         this.#password = password
//         this.username = username
//     }
//     #password
//     getPassword(username){
//         if (username === this.username){
//             return this.#password
//         }
//         else {
//             return 'Not valid username'
//         }
//     }
//     setPassword(oldPassword, newPassword, username){
//         if(username === this.username && oldPassword === this.#password){
//             this.#password = newPassword
//             console.log('Password changed');
//         } else{
//             console.log('Forbidden');
//         }
//     }
// }
// let user1 = new User('qwerty', 'Kuba')
// // console.log(user1.password);
// console.log(user1.getPassword('Kuba'));
// user1.setPassword('qwerty', 'asdf', 'Kuba')
// console.log(user1.getPassword('Kuba'));

// class User {
//     constructor(password){
//         this._password = password
//     }

//     get getPassword(){
//         return this._password
//     }
//     set setPassword(newPassword){
//         this._password = newPassword
//     }

//     #sayHello(){
//         console.log('Hello!');
//     }
//     getPrivateMethod(){
//         this.#sayHello()
//     }
// }

// let user1 = new User('qwerty')
// console.log(user1.password);
// console.log(user1.getPassword);
// user1.setPassword = 'asdf'
// console.log(user1.getPassword);
// // user1.#sayHello()
// user1.getPrivateMethod()


// class Dog {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }

//     sayVoice(){
//         console.log('GAVV');
//     }
// }

// class Cat {
//     constructor(nama, age){
//         this.name = name
//         this.age = age
//     }
//     sayVoice(){
//         console.log('MIUUU');
//     }
// } 

// let dog = new Dog('maks', 2)
// dog.sayVoice()

// let cat = new Cat('Cola', 3)
// cat.sayVoice()

// class Car {
//     constructor(brand){
//         this.brand = brand
//     }
//     go(){
//         console.log('I am going');
//     }
// }
// class Ship {
//     constructor(brand){
//         this.brand = brand
//     }
//     go(){
//         console.log('I am moving');
//     }
// }
// let obj1 = new Car('Mers')
// obj1.go()

// let obj2 = new Ship('Ship')
// obj2.go()

































































