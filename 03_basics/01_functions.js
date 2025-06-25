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
// console.log(loginUserMessage("")) // it will work because string is passed but empaty
// console.log(loginUserMessage()) // it will return undefined

function loginUserMessage1 (userName = "sam") {
    if(!userName) {
        console.log("Please enter the user name")
        return 
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage1("arif"))
// console.log(loginUserMessage1())

function calculateCartPrice(...num1) { // rest operator and return an array
    return num1
}
console.log(calculateCartPrice(100, 222, 333.4, 344, 55, ))

function calculateCartPrice1(val1, val2, ...num1) { // rest operator and return an array
    return num1
}
console.log(calculateCartPrice1(100, 222, 333.4, 344, 55, ))

const user = {
    username: "abubakar",
    price: 233,
}
function handleObject  (anyobject) {
    console.log(`the name of user is ${anyobject.username} and its price is ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    username: "sam",
    price: 333,
})

const newArray = [11, 33, 444, 55]
function retrunSecondValue (getArray) {
    console.log(getArray[1]);
    
}
// retrunSecondValue(newArray)
retrunSecondValue([11,22,33,44])