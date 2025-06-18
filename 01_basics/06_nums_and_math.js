const score = 400 //automatically detected its number
// console.log(score) 

const balance = new Number (100); //specially tells us its number
// console.log(balance)

// console.log(balance.toString()) //now it converts number to string. if we check typeof it
// will be string
const newBalance = balance.toString()
// console.log(typeof newBalance)
// console.log(newBalance.length)
// console.log(balance.toFixed(2))

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)) // it return string value and it take range
// between 1 to 21

const hundred = 1000000
// console.log(hundred.toLocaleString()) // this method puts commas in between zeros as 
//american standard
// console.log(hundred.toLocaleString("eng-IN"))

// +++++++++++++++++++++Maths+++++++++++++++++
// console.log(Math) // it is object and have alot properties
// console.log(Math.abs(-4)) // it converts negative values to positive
// console.log(Math.round(3.4)) // ans 3
// console.log(Math.floor(4.9))
// console.log(Math.ceil(2.1))
// console.log(Math.min(2,3,4,1))
// console.log(Math.max(4, 6, 6, 9))

// console.log(Math.random())
// console.log((Math.random()*10) + 1)
// console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)