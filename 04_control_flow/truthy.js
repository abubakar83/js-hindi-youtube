const userEmail = 'abubakar@ai'
if(userEmail) {
    console.log(`got user email`)
}else{
    console.log(`Don't have user email`)
}

                    // truthy and falsy values 
// falsy values 
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN
// truthy values
// "0", "false", " ", [], {}, function () {}

// howt to check empty array
if(userEmail.length === 0) {
    console.log("empty array")
} 

// how to check empty object 
const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log(`empty array`)
}