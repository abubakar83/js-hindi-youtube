// singleton (Object.create)(literals not make, only singleton made by constructor)

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    [mySym]: "hello",
    name: "Hithesh",
    "fullName": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "Hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ['monday', "saturday"]
}
// console.log(JsUser.name)
// console.log(JsUser["name"]) // we can also access like this
// console.log(JsUser['fullName'])// when we add key like string then this type will necessary
// console.log(JsUser[mySym])

JsUser.email = "HitesChoudhary@chatGPT.com" // for changing of value

// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function () { 
    console.log("hello there")
}

JsUser.greetingTwo = function () {
    console.log(`Hello js user ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())