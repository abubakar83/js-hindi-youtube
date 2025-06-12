const name = 'Abu bakar '
const repoCount = 50 

console.log(name + repoCount + ' value')

console.log(`my name is ${name} and my gitHub repo count is ${repoCount}`)

const gameName = new String ("abubakar")
// string is an object with key value pair
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.charAt(3))
console.log(gameName.indexOf("b"))
console.log(gameName.toUpperCase())
console.log(gameName.length)
let newString = gameName.substring(0, 4) //here 4 is not include
console.log(newString)
console.log(gameName.slice(-8, 2))

const data = "   hello    "
console.log(data)
console.log(data.trim()) // trim removes white spaces 

const url = 'https://youtube.com/elon%20musk'
console.log(url.replace('%20', "-"))
console.log(url.includes("youtube"))

let anotherString = "helo-how-are-you and where are you"
console.log(anotherString.split("-")) //split takes two arguments sperator and limit