//基础的用户注册，登录操作
const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user')
const expressJOI = require('@escook/express-joi')

const {reg_schema, login_schema} = require('../schema/user')
router.post('/signup',expressJOI(reg_schema),userHandler.regUser)

router.post('/login',expressJOI(login_schema) ,userHandler.Login)

module.exports = router