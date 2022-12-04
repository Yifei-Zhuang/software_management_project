const express = require('express')
const cors = require('cors');
const userRouter = require('./router/user')
const adminRouter = require('./router/user_work')
const joi = require('joi')
const {expressjwt} = require('express-jwt')
const config = require('./configue')
const app = express()
app.use(cors())

app.use(express.urlencoded({extended: false}))
//解析application/x-www-form-urlencoded格式
app.use(express.json())
//json格式

//信息回复中间件 status:0代表成功 message负责传递信息
app.use(function(req, res, next){
    res.cc = function(err, status = 1){
        res.send({
            status,
            message : err instanceof Error ? err.message : err
        })
    }
    next()
})

//Token验证, /api/ 开头不需要进行token验证
app.use(expressjwt({secret: config.jwtSecretKey,algorithms:['HS256']}).unless({path: [/^\/api/]}))
//错误信息发送中间件

app.use('/api',userRouter)
app.use(adminRouter)

//定义错误级别中间件
app.use((err, req, res, next)=>{
    //验证失败
    if(err instanceof joi.ValidationError)
        return res.cc(err)
    //身份认证失败
    if(err.name === 'UnauthorizedError' ) return res.cc('身份认证失败')
    return res.cc(err)
})

//监控端口
app.listen(3007, ()=>{
    console.log('express server is running at http://127.0.0.1:3007')
})
