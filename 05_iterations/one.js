// for 
// for(intilizer; condition; iteration) {

// }

// for(i = 0; i <= 10; i++) {
//     const element = i
//     if(element == 5) {
//         console.log(`5 is the best number`)
//     }
//     console.log(i)
// }

// for(let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`)
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j} `)
//     }
// }

// let myArr = ["kiran", "lubna", 'shanza']
// for(let i = 0; i < myArr.length; i++) {
//     let element = myArr[i]
//     console.log(element)
// }

for(let i = 1; i <=20; i++) {
    if(i == 5) {
        console.log(`deceted  5`)
        break
    }
    console.log(`the value of i is ${i}`)
}
for(let i = 1; i <=20; i++) {
    if(i == 5) {
        console.log(`deceted  5`)
        continue
    }
    console.log(`the value of i is ${i}`)
}