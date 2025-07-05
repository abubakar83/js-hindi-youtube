// const arr = [1, 2, 3, 4, 5, 6]
// for (const num of arr) {
//     console.log(`the value of arr is ${num}`)
// }

// const greetings = 'hello there'
// for(const greet of greetings) {
//     console.log(greet)
// }

// Map 
// the map object holds key-values pairs, and remember origional insertion order of values

const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "United States of America")
map.set('Fr', "France")
// console.log(map)

// if we add again same value it will not accept 
map.set('IN', "INDIA")
// if we put loop on this then
for(const key of map) {
    console.log(key)
} // it return arrays of all values 
for(const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

// Can we iterate on object 
const myObject = {
    game1: "NFS",
    game2: "spiderman"
}
for(const [key, value] of myObject){
    console.log(key, ":-", value)
} // it will not work