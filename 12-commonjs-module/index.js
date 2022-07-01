// const modules = require('./module')
// console.log(modules)
const fs = require('fs')

console.log('1')
new Promise(function (resolve) {
    console.log(6)
    // fs.readFile('./files/1.text',(err,data)=>{
    //     console.log(2)
    //     resolve()
    // })
    setTimeout(() => {
        console.log(2)
    }, 100);
}).then(function (resolve) {
    new Promise(function (resolve) {
        fs.readFile('./files/2.text', (err, data) => {
            console.log(4)
            resolve()
        })
    })
    console.log(3)
})
new Promise(function (resolve) {
    fs.readFile('./files/2.text', (err, data) => {
        console.log(4)
        resolve()
    })
})
console.log('5')