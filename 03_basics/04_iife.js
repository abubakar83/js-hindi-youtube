// immediately invoked function expression (IIFE) (immediately conneted data base or preventing from global scope pollution)

// (function chai () {
// name IIFE
//     console.log(`DB CONNECTED`)
// })(); // here is the must semicolon

// ( () => console.log(`DB CONNECTED`))()

((name) => console.log(`${name}`))("hell0")


// javascript execuation context and call stack
// there are two types of execution context.    
// 1. global execution context => (node have own window have own) this key word
// 2. function or functional execution context 
// Execution Procudure,
// first memory creation phase or creation phase (memory allocatin)
// 
// global execuation => this => memory phase => 
// val1 => undefined
// val2 => undefined
// addnum => defination 
// result1 = undefined
// result2 = undefined
// memory phase => execution phase =>
// val1 = 10
// val2 = 5
// result1 = addNum => new variable enviroment  + execution thread 

// and 3 is EVAL execuation context but in mangoose
// javascript is single thread 