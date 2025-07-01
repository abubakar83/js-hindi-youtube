// if

// const isUserLoggedIn = true
// const temperature = 41
// if (temperature < 50) {
//     console.log(`temperature is less than 50`)
// } else {
//     console.log(`temperatue is greater than 50`)
// }
// >, <, <=, >=, ==, ===, !=, !==

// const score = 200
// if (score > 100) {
//     const power = 'Fly'
//     console.log(`User power ${power}`)
// }
// console.log(`User power ${power}`) // error because of scope

// const balance = 1000
// if(balance > 500) console.log("test"), console.log('test2')// we can write like this but bad practise 

// const balance = 1000
// if (balance < 400) {
//     console.log(`your balance is less than 400`)
// }else if(balance < 700) {
//     console.log(`your balance is less than 700`)
// }else if(balance < 800) {
//     console.log(`your balance is less than 800`)
// }else {
//     console.log(`your balance is than 1100`)
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userLoggedIn && debitcard && 2==2) { // all statements must be true
    console.log(`allow to buy course`)
}

if(loggedInFromGoogle || loggedInFromEmail ||  3 > 4) {
    console.log(`one condition is true then code executed`)
}

