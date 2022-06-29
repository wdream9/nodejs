const express = require('express')

const app = express()

/**
 * 作为静态资源服务 express.static()
 * 如果要托管多个静态资源目录，请多次调用express.static()
 */

// 访问资源时。不需要加入这一层目录（public）
app.use(express.static('./public'))
/**
 * 托管多个静态资源目录
 * 在第一个静态资源文件中找到了，就不会去第二个文件夹进行查找
 */
app.use(express.static('./static'))
app.use(express.static('./sample'))



app.listen(80,()=>{
    console.log("server start at 80")
})