const express = require('express')
const app = express()


app.use(express.urlencoded({extended:false}))
// jsonp配置需要在cors之前，不然jsonp会被cors处理成为 cors
app.get("/api/jsonp",(req,res)=>{
    // TODO：定义jsonp的实现过程
    // 1 得到函数名称
    const funName = req.query.callback
    // 2 定义要发送到客户端的数据对象
    const data = {name:'wyh',age:22}
    // 3 拼接处一个函数的调用
    const scriptStr = `${funName}(${JSON.stringify(data)})`
    // 4 吧拼接的字符长响应给客户端
    res.send(scriptStr)
})


// 后续的路由需要用cors处理
const cors = require(cors)
app.use(cors())