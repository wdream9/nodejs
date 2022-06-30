const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
    const query = req.query
    console.log(query)
    res.send({
        state: 200,
        msg: 'get request success!!!',
        data: query
    })
})
router.get('/wyh', (req, res) => {
    // 通过req.body获取请求体中的包含的url-encoded表单数据
    const body = req.body
    res.send({
        state: 200,
        msg: 'get request success!!!',
        data: body
    })
})

module.exports = router

