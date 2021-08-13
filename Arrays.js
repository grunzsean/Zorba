
let x = 20 
console.log(x)
console.log(typeof x)


// --- Array 

let numbers = [1,2,3,4,5]
let names = ["chinmay","amol","raj","ramesh","rajiv"]
let person = ["chinmay","deshpande",269029,true,[234,34]]

// Objects 
// Objects will have properties and method

// Array 

       //    0       1         2
let city = ["pune","nagpur","mumbai"]

// Array stores the value by index
console.log(city[0])
// length of array
console.log(city.length)
// Last element of Array 
console.log(city[city.length-1])
// Replace the value at position 1
city[1] = "jaipur"
console.log(city)

// ----------- printing every element inside arrays -----------
let fruits = ['apple','mango','bananba','papaya']

//console.log(fruits[0])
for(let i = 0 ;i < fruits.length ; i++){ //1
        //console.log(i)  // 0
        console.log(fruits[i])
}

console.log('----------------')

for(let i = fruits.length-1  ;i >= 0 ; i--){ //1
    //console.log(i)  // 0
    console.log(fruits[i])
}

// let firstName = "chinmay"
// let ff = firstName.toUpperCase()
// console.log(ff)

// Methods

//Action
//Return  


// Adding the element at the last 

let  veg = ["chilly","tomato","cabbage"]
let aa = veg.push("brinjal")
console.log(aa) // ----  4
console.log(veg) // ["chilly","tomato","cabbage",brinjal]


let bb = veg.pop()
//Action - removes the element from last
//return- string (lastELement)
console.log(veg)
console.log(bb)
console.log(typeof bb)

// Add the element at the beginning 
veg = ["chilly","tomato","cabbage"]
let cc = veg.unshift("ladyfinger")  // 4
// Action 
// Return type
console.log(cc)  //  4
console.log(veg) //["ladyfinger","chilly","tomato","cabbage"]

// shift removes the element fron begning
let dd = veg.shift()
console.log(dd)  // ladyfinger
console.log(veg)//["chilly","tomato","cabbage"]
console.log('---------')

               // Action                       // Return (value and type)
// Push        add the element at of array     new length (number)

// Pop         removes the element from last    // string

// Shift       removes the element from the beginning  // string 

// Unshift     Add the element at the begning     //new length


let country = ["nepal","india","pakistan","bhutan"]
let ee = country.reverse().pop()
console.log(ee)
console.log(country)

//Action
// Return 

let country = ["nepal","india","pakistan","bhutan"]
let ee = country.push("usa").toUpperCase()
console.log(ee)
console.log(country)



// map filter reduce find findindex

// Action  - adding the element at last 
// Return  - number
// function add(x,y){
//     console.log(x+y) // 25
//     return true
// }
// let gh = add(12,13)
// console.log(gh)
