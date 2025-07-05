// for in loop on object
const myObject = {
    js: "javascipt",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in myObject){
    // console.log(key)
    // console.log(`the keys of object is ${key} and their value is ${myObject[key]}`)
}

// for in loop on array 
const myArr = ['js', "c++", "phyton", "ruby"]
for(const key in myArr ){
    // console.log(key) // or
    // console.log(myArr[key])
}

const map = new Map()
map.set("IN", "INDIA")
map.set("USA", "United States of America")
map.set('Fr', "France")
for(const key in map) {
    console.log(key)
} // it will not work becuase map is not iterate able