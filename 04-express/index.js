const express = require('express')

const app = express()

app.listen(80,()=>{
    console.log("server start at 80")
})

app.post('/demo',function(req,res){
    //获取路径参数
    console.log(req.query)
    res.send({
        name:"wyh",
        age:12345,
        method: "post"
    })
})
app.get('/demo',function(req,res){
    res.send({
        name:"wyh",
        age:12345,
        method: "get"
    })
})

// 获取路径动态参数，id是动态参数
// http://localhost/demo/:id
app.get('/demo/:id/:name',function(req,res){
    console.log(req.params)
    res.send("success!")
})