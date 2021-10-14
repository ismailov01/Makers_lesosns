// writeHtml('Hello, I am progger')


// function writeHtml (text) {
//     console.log(text);
// }

// writeHtml('Good morning')


// let sum = function (num1, num2) {
//     console.log(num1, num2);
//     let result = num1 + num2
//     console.log(result);
// }

// sum(43, 7)

// let multy = (a, b, c) => {
//     console.log(a, b, c);
//     let result = a * b * c
//     return result
// }
// let newNum = multy(5, 10, 2)
// console.log(newNum);

// let multy = (a, b, c) => a * b * c
// let result = multy(2, 3, 4)
// console.log(result);

// function perimetr(a, b){
//     return (a + b) * 2
// }
// let result = perimetr(5, 10) + 10
// console.log(result);

// function func(arg1, framework) {
//     console.log(arg1);
//     return function(arg2) {
//         console.log(`Язык программирования ${arg1} ${framework} и ${arg2}`)
//     }
// }
// let newFunc = func("Java", ' Mobile')
// newFunc('Python')
// newFunc('C++')

// function fact(num) {
//     if(num === 1) return 1
//     return num * fact(num - 1)
// }
// console.log(fact(5));

// let product = {
//     title: 'Adidas ball',
//     size: 4,
//     price: 100,
//     getSize() {
//         console.log(this.size);
//     },
//     setSize(newSize) {
//         this.size = newSize
//     },
//     getPrice: () => {
//         console.log(this);
//     },
//     setTitle(newTitle){
//         this.title = newTitle
//     }
// }
// product.getSize()
// product.setSize(6)
// product.getSize()
// // console.log(product);
// product.getPrice()
// product.setTitle('Nike')
// console.log(product);

// let elevator = {
//     minFloor: 1,
//     maxFloor: 16,
//     currentFloor: 1,
//     printFloor (){
//         console.log(this.currentFloor);
//     },
//     upOneFloor() {
//         if(this.currentFloor < this.maxFloor){
//             this.currentFloor++
//             this.printFloor()
//         } else {
//             alert('Вы достигли максимального этажа')
//         }
//     },
//     downOneFloor() {
//         if(this.currentFloor > this.minFloor){
//             this.currentFloor--
//             this.printFloor()
//         } else{
//             alert('Вы достигли минимального этажа')
//         }
//     },
//     toFloor(floor) {
//         if(floor <= 16 && floor >= 1) {
//             while(this.currentFloor !== floor){
//                 this.currentFloor > floor ? this.downOneFloor() : this.upOneFloor();
//             }
//         }
//         else {
//             alert('Такого этажа не существует')
//         }
//     }
// }

// elevator.printFloor()
// elevator.upOneFloor()
// elevator.downOneFloor()
// // elevator.downOneFloor()
// elevator.toFloor(14)
// elevator.toFloor(4)


/////////Генератор паролей
// function generatePassword(){
//     let length = 8;
//     let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789.!@#$%^&*()';
//     let password = '';
//     let charsetlength = charset.length
//     for(let i = 0; i < length;i++){
//         password += charset[Math.ceil(Math.random() * charset.length)]
//     }
//     return password
// }

// let password = generatePassword()
// console.log(password)

// let arr = [[[[5], 3], 0, ['test']]

// function countNumbers(array) {
//     if(array.length === 0) return 0 
//     let total = 0
//     let first = array.shift()
//     if(Array.isArray(first)){
//         total += countNumbers(first)
//     } else if(Number.isInteger(first)){
//         total += 1
//     }
//     return total + countNumbers(array)
// }















































