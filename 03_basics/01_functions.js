function addTwoNumbers (number1, number2) { // these are parameter
    console.log(number1 + number2)
}
// addTwoNumbers(3, 4) // these are arguments

        //  OR WE CAN WRITE LIKE THIS
function addTwoNumbers1 (number1, number2) {
    let result = number1 + number2
    return result
} 
const result = addTwoNumbers1(3, 5) 
// console.log("Result:", result )      

function loginUserMessage (userName) {
    return `${userName} just logged In`
}
// console.log(loginUserMessage('Abu bakar'))
// console.log(loginUserMessage("")) // it will work because string is passed
// console.log(loginUserMessage()) // it will return undefined

function loginUserMessage1 (userName = "sam") {
    if(!userName) {
        console.log("Please enter the user name")
        return 
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage1("arif"))
console.log(loginUserMessage1())