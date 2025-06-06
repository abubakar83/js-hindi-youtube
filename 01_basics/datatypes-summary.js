// In JS there are two data types. Prmitive and Non-Prmitive or Reference data type, this catagories 
// base on memory storage.

// Primitive
// 7 types: numbers, string, boolean, null, undefine, symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let useEmail;

const id = Symbol("123");
const anotherId = Symbol('123') // it will not return same value of id and
// anotherId values 
console.log(id === anotherId)

const bigNumber = 23432343543345n


// Reference (Non primitive) 
// Array, Objects, Functions

const hero = ["abc", "acd", "fcd"]
const myData = {
    name: 'Abu bakar',
    age: 24, 
    cell: +923439457595,
}
