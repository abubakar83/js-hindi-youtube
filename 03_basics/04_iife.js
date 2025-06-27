// immediately invoked function expression (IIFE) (immediately conneted data base or preventing from global scope pollution)

// (function chai () {
// name IIFE
//     console.log(`DB CONNECTED`)
// })(); // here is the must semicolon

// ( () => console.log(`DB CONNECTED`))()

((name) => console.log(`${name}`))("hell0")