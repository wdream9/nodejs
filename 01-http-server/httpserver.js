const http = require('http')
const server = http.createServer();
server.on("request", function (req, res) {
    console.log(req.url)
    console.log(req.method)
    
    console.log("login path start!")
    res.setHeader('Content-Type', "text/html;charset=utf-8")
    res.end("http end! \r\n <h3>nodejs</h3>")
})
server.listen(8088, function () {
    console.log('http start...')
})