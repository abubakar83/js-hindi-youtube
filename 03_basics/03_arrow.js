
const user = {
    username: "hitesh",
    price:  999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome website`) // this key word is for current context
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() 

// console.log(this) // it will return empaty object because there is no global varivables

function chai () {
    let username = "hitesh";
    console.log(this.username)
}
// chai() // it will not work and result is undefine because this will work in object

// const chai = function () {
//     let username = "hitesh";
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = 'hitesh'
//     console.log(this.username)
// }
// chai() 

// const addTwoNumbers = (num1, num2) => { // explicitly
//     return num1 + num2
// }
// console.log(addTwoNumbers(2,3))

const addTwoNumbers = (num1, num2) => (num1 + num2) // implicitly 
console.log(addTwoNumbers(2, 3))

const addTwo = (num1, num2) => {username: "hitesd"} // return undefine because always object return like this ({username: "hitesh"}}) 
console.log(addTwo(2, 3))