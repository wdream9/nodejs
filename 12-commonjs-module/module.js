function fun(){
    console.log('module!')
}
const obj = {
    name:'hhhhh'
}

module.exports = {
    fun,
    obj
}

obj.name = 'wwww'