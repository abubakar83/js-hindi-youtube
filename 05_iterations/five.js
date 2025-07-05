const coding = ['js', 'cpp', 'python', 'ruby', 'swift']
coding.forEach( function (val) {
    // console.log(val)
})

coding.forEach( (index) => {
    // console.log(index)
})

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        langugeName: "phyton",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName)
})