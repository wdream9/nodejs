const express = require('express')

const router = require('./router')
const app = express()

// 解析表单的数据的中间件
app.use(express.urlencoded({extended:false}))

// 配置资源跨域
const cors = require('cors')
app.use(cors())
// 把路由模块注册到app上,访问需要加路由前缀
app.use("/api",router)

app.listen(80,function(){
    console.log("server start at http://localhost")
})

