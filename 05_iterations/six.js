const coding = ['js', 'ruby', 'java', 'python', 'cpp']
const returnItem = coding.forEach((item) => {
    return item
})
// console.log(returnItem) // it will return undefined 

// filter 
const myNumbers = [1, 3, 4, 5, 6, 7, 8, 9, 10]
const myNewNumbers = myNumbers.filter((num) => num > 5 )
// console.log(myNewNumbers)

// if we wanna do this work with forEach then 
const newNum = []
myNumbers.forEach((num) => {
    if(num > 5) {
        newNum.push(num)
    }
})
console.log(newNum)