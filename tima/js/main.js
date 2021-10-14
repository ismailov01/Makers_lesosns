
// task 1
function min (a, b) {
    return a < b ? a : b
}
console.log(min(1,3));


1

// TASK 2
let arr=[1,2,4,9,13,4,10]

for(let i=0;i<arr.length;i++){
    if(arr[i]===4){
        console.log("Есть")
        break
    }
}

2

//TASK 3
function sum(a,b){
    return a+b
}
console.log(sum(200,56));

3


//task 4
let lang = 'ru'
let arr2 = []
if(lang === 'ru'){
    arr2.push('Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота')
} else if(lang === 'en'){
    arr2.push('monday','tuesday','wednesday','thirsday','friday','sturday','sunday')
}
console.log(arr2);


4


//task 5
let str = "Hello World my name is andrey"

function func5(str){
    str = str.split(" ")
    
    for(let i = 0 ; i < str.length ; i++){
        // console.log(str[i])
        if(str[i][0] === str[i][0].toUpperCase()){
            console.log(str[i])
        }
    }

}

func5(str)

5


//task 6

let min1 = 11
if ( min1 > 0 && min1 <= 15){
    console.log(`${min1} входит в первую четверть часа`)
}
else if ( min1 > 15 && min1 <= 30){
    console.log(`${min1} входит во вторую четверть часа`)
}
else if ( min1 > 30 && min1 <= 45){
    console.log(`${min1} входит в третью  четверть часа`)
}
else if ( min1 > 45 && min1 < 60){
    console.log(`${min1} входит в четвертую  четверть часа`)
}

6

/// task 7
let arr1 = ['r', 'r', 'r']
arr1 = arr1.join(',')
console.log(arr1);

let str1 = ''
for(let i = 0; i < arr1.length; i++){
    str1 += arr1[i]
}
console.log(str1)


7


//task 8
let n = 1000
let count1= 0
while(n>50){
    n/=2
    count1++
}

console.log(n)
console.log(count1)

8


// CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!CONGRATULATIONS!!!!!!