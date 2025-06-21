const marvels_heros = ['thor', "ironman", "spiderman"]
const dc_heros = ["superman", "flash", 'batman']

marvels_heros.push(dc_heros) //it push whole array in marvels_heors 
// push() method inter the values in exists array
// console.log(marvels_heros)

// console.log(marvels_heros[3][1])

const allHeros = marvels_heros.concat(dc_heros)
console.log(allHeros)

const all_new_heros = [...marvels_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1, 2, 3, 4, [3, 5, 5], 7, [3, 4, [3, 4]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// sometime data comes (scraping, node list, objects, string from browser) from unknown place and we do not know its type then we use this method
console.log(Array.isArray("Abu baker"))
console.log(Array.from("Abu bakar")) // it convert all type of data into array
console.log(Array.from({name: "Abu bakar"})) // interesting (empaty array, ask keys array or values array)

// if we have multiple varibles the we will convert in single array with the help of Array.of()
let score1 = 100
let score2 = 200
let score3= 300

const allScore = Array.of(score1, score2, score3)
console.log(allScore)