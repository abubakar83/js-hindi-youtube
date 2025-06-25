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

const users = [
{
    id: 1,
    email: "h@gmail.com"
},
{
    id: 2,
    email: 'h@gmail.com'
},
{
    id: 3,
    email: "h@gmail.com"
}
]
users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) //return data types is array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // return data type is array and make indiviual array for key, value pair

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

// Object destructuring

const course = {
    courseName: 'js in hindi',
    price: '999',
    courseInstructor: "abu bakar"
}
// course.courseInstructor 

const {courseInstructor: instructor} = course
// console.log(courseInstructor)
console.log(instructor)

// Jason data type
// {
//     "name": "abubaker",
//     "courseName": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {},
// ]

// https://randomuser.me/
// https://jsonformatter.org/