// global sceope and block scope 
// var is global scope variable
// window have own scope and while node have own

var c = 300
let a = 300 

if(true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one () {
    const name = "abubakar"
    function two () {
        const website = "youtube"
        console.log(name)
    }
    // console.log(website) // it will not access 
    two()
}
// one()

if(true) {
    const name = "Hitesh"
    if(name === "Hitesh"){
        const website = " youtube"
        // console.log(name + website)
    }
    // console.log(website) it will not work
}
// console.log(name) it will not work 

// _+++++++++++++++++++++++++++++++++++INTRESTING++++++++++++++++++++++++++++++
// execution before and after
console.log(one(5))

function one (num) {
    return num +1
}

const addTwo = function (num) {
    return num + 2
}
addTwo(5)