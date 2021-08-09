// let x = 10
// console.log(x)

// let and const

// Basic number

let x = 10
console.log(x)
console.log(typeof x)

// Boolean (It can hold only two values true or false)

// Boolean true or false

console.log('-----------------')

let isAbove18 = true
console.log(isAbove18) // true
console.log(typeof isAbove18) // boolean

// let x = 10
// console.log(x) 

// let and const 
// Basic number 

let x = 10
console.log(x)
console.log(typeof x)

// Boolean  (It can hold only two values true or false)

// Boolean true or false

console.log('-----------------')

let isAbove18 = true
console.log(isAbove18)  // true
console.log(typeof isAbove18) // boolean


console.log('-----------------')
let firstName = "chinmay"
//let firstName = 'chinmay'
console.log(firstName)
console.log(typeof firstName)


//Functions and Arithmetic operation

console.log('---------')

let numOne = 20
let numTwo = 10
let numThree = 100
let numFour = 50


console.log(numOne + numTwo)
console.log(numOne - numTwo)
console.log(numOne * numTwo)
console.log(numOne / numTwo)
console.log(numOne % numTwo)
//% modulus
// console.log(40%3)   //? 1
// console.log(56%12)  //8

console.log('---------')

console.log(numThree+numFour)
console.log(numThree-numFour)
console.log(numThree*numFour)
console.log(numThree/numFour)
console.log(numThree%numFour)


// Donot repeat yourself -----

//Function declartion

console.log('--------')

// function to do arthimetic operations

function calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)

}

calculator(100,50)
console.log('----------------------')
calculator(3000,1000)  // calling the function
console.log('----------------------')
calculator(12,4)


// 4 function 


// Addition 
// Substration
//Multiplication 
// Division

// function functioName(paraone, paratwo){

//     console.log(x+y)
//     console.log(x-y)
//     console.log(x*y)
//     console.log(x/y)
//     console.log(x%y)

    
// }

// functioName(12,13) // arguments // calling the function

console.log("hello")


// function ??

// function without parameter and no return  type
// function cal(){
//     console.log(8+9)
// }
// cal()
// cal()

// function with parameter and without return type

// function cal(x,y){
//     console.log(x+y)
// }
// cal(10,20)
// cal(30,40)

//  show 100 ,  given 100

// function with parameter and with return type



function cal(x,y,c,a,b,e){
    return x + y + c + a + b+ e
}
let a = cal(12,13,12,13,44,55)
console.log(a)
console.log(a+25)
console.log(a * 0.10)
console.log(a-12)


// Strings

// Defining with the let keyword

let firstName = "Chinmay"
firstName = "Poorva"
console.log(firstName)

// Defining with the const keyword


// const lastName = "Deshpande"
// lastName = "Vyas"
// console.log(lastName)


// Strings in js 
// Strings stores the character by index

let city = "Pune"
//let city = 'Pune'
console.log(city)

// 0  1  2  3
// P  u  n  e

console.log(city.length)


// -------------------------
//Methods of String
// Methods --- do some action
// and returns something



function sub(x,y){
    return x + y
}
let r = sub(12,13)
console.log(r)
console.log(typeof r)

function add(x,y){
    console.log(x+y) // 47
    //return x+y
}
let t = add(23,24)
console.log(t) // undefined // 47



let city2 = "Nagpur"
let i = city2.toUpperCase()
console.log(typeof i)
console.log(i)





let r = city2.toLowerCase().toUpperCase().length  // 4
console.log(typeof r)
console.log(r)










