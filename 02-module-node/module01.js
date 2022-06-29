const son = require('./son') 
const fun = function(){
    console.log("module01.js")
}
console.log("son===>",son)
console.log('nodejs==>',module)

exports.name = "wyh"
module.exports.name = 'www'
console.log(exports === module.exports)
