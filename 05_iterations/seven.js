const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const myNewNum = myNumbers.map((num) => {return num + 10})
// console.log(myNewNum)

// Chaining 
const newNo = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 3)
                .filter((num) => num >= 34)
console.log(newNo)                