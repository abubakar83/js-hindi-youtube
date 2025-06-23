// const tinderUser = new Object() // singleton object 

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "abubakar",
    fullname: {
        userfullname : {
            firstname: "abubakar",
            lastname: "sidduque"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //here object is optional but for target
const obj3 = {...obj1, ...obj2}
console.log(obj3)