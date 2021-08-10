let firstName = "Chinmay Deshpande"
console.log(typeof firstName)


// String stores the value by index 

let secondName = "Amol"

//      0 1 2 3
//      A M O L

// Every object has 2 things
//properties and methods

//Length
console.log(secondName.length)
// Last index will always be length -1
console.log(secondName.length-1)

secondName = "Amol"

// Printing the firstCharacter to the console 
console.log(secondName[0])
console.log(secondName[secondName.length-1])

let thirdName  = "Chinmay Deshpande"
//console.log(thirdName[0])

// Loops -->
// for(intialization; conditionCheck; increment/decrement){
//     // statments
// }


for(let i = 0 ; i < thirdName.length ;i++){  // i = 1 , i = 2 -----, i = 17
    //console.log(i)  // 0 , 1
    console.log(thirdName[i])

}
// Print all charactes from reverse
let fourName = "Amit"
console.log('--------------')
for(let i = 3; i >=0 ; i--){ // 2
    //console.log(i)
    console.log(fourName[i])
}

// Program to count the 'o' character in strinf

let fifthName = "Rohan Sooka"
let count = 0

for(let i = 0 ; i < fifthName.length ; i++){
    if(fifthName[i] == 'o'){
        count = count + 1
    }

}
console.log(count)

// Ways to print the string

console.log('I am new to js')
console.log("I am new to js")
console.log('I am new to js please help with "book"')
console.log("I am new to js please help with book's ")


let sixName = "amol"
let sevenName = "rao"

// string concatination
console.log(sixName +" "+sevenName)

// string interpolation

let firstNamee = "chinmay"
let secondNamee = "deshpande"
console.log("My first name is "+firstNamee+" and my lastName is "+secondNamee)
console.log(`My firstname is ${firstNamee} and my last name is ${secondNamee}`)

//string + string -- string
//string + number -- string
//number + string -- string
//number + number -- number

// Methods of strings
//1) Methods perform some action 
//2) Method returns something



function add(x,y){
    console.log(x+y) // 25
    return x+y
}
let g = add(12,13)
console.log(g)
console.log(g+10)


let eigthName = "amol"

//Action - to convert everthing to uppercase
// Return type string 

let i = eigthName.toUpperCase()
console.log(typeof i)
console.log(i)

//Action - to convert everthing to lowercase
// Return type string 

let l = eigthName.toLowerCase()
console.log(typeof l)
console.log(l)
l = eigthName.toLowerCase().toUpperCase().length
console.log(l)

// indexOf

// Action - to find index of character passes
// Return type


let tenName = "chinmahy"
let iNo = tenName.indexOf('h')
let iNo2 = tenName.indexOf('h')

console.log(iNo)
console.log(iNo2)

let hb = tenName.indexOf('h',2)
console.log(hb)

// Methods
//1) Methods perform some action 
//2) Method returns something
