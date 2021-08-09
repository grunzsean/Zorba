let fullName = "chinmay"
//0  1  2  3  4  5  6
//c  h  i  n  m  a  y

// property 
// Method -- action - convert every character in Uppercase
// return ---
console.log(fullName.length)
let upper = fullName.toUpperCase()
console.log(upper)
console.log(typeof upper)

// Method chaining
console.log(fullName.length)
let lower = fullName.toUpperCase().toLowerCase().length
console.log(lower)
console.log(typeof lower)

let city = "Pune"

 //  0    1   2   3
//   P    U   N   E

// Length - 4
// Length -1 ---> lastIndex
console.log(city[0])
console.log(city[1])
console.log(city[city.length-1])
// Printing every character of string

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

//let state = "Maharashtra" 
// Loops

// for(intialization; conditionCheck ; increment/decrement){
//     // statements
// }

//   intialization ---> conditionCheck ---> ? True print --> Increment/Dexremtn

// for(let i = 0 ; i < state.length ; i++){  // i = 1 // i = 2 // i = 3
//     console.log(i)  //   0 , 1 , 2 , 3 , 4
//     console.log(state[i])

// }


let state = "Maharashtra" 
console.log(state.length)

for(let i = 0 ; i <  state.length ; i++){  
    //console.log(i) 
    console.log(state[i]) 
    //console.log(state[i])
}

// Printing the character in reverse
console.log(state.length-1)
console.log(state)
for(let i = 10 ; i >=0 ; i--){  // 9  // 0
    //console.log(i)  // 10  // 9  // 0
    console.log(state[i])

}

let cityNew = "Pune"
let reveredString = ""
for(let i = cityNew.length-1 ; i >=0 ; i--){ 
    reveredString = reveredString + cityNew[i]  
}
console.log(reveredString)

// string 


// string + string----> string
// string + number ---> string 
// number + string ----> string 
// number + number ---- number

let i = 10
let t = 20
let h = "add"

console.log(i+h+t)  // number  + string  - '10add' + 20 - 10add20
console.log(i+t+h) // number + number 
console.log(h+i+t) // string + number --- string + number --> string
 









