const express = require('express')
const qs = require('querystring')
const app = express()


let str = ''
app.use((req, res, next) => {
    console.log('全局插件！！！')
    // 监听req的data事件
    req.on('data', (chunk) => {
        console.log(chunk)
        str += chunk
    });
    // 监听req的end事件
    req.on('end', () => {
        // parse：name=wyh&age=12 => {name:wyh;age:12} 中文乱码会解码
        let body = qs.parse(str)
        console.log(str)
    });
})
app.get('/get', function (req, res) {


})