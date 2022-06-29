const express = require('express')

const app = express()

/**
 * 添加静态资源访问前缀
 * 
 * http://localhost/public/html/index.html
 */

app.use('/public',express.static('./public'))
app.use('/static',express.static('./static'))
app.use('/sample',express.static('./sample'))



app.listen(80,()=>{
    console.log("server start at 80")
})