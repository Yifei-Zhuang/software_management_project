//主要负责向前端发送数据信息
//获取用户信息 获取用户收藏 获取用户喜欢 获取用户历史访问
//需要token的用户操作
const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user_get')
const expressJOI = require('@escook/express-joi')

//获取用户信息
router.get('/userMsg',userHandler.userMsg)
//获取用户收藏
router.get('/userFavor',userHandler.userFavor)
//获取用户喜欢
router.get('/userLike',userHandler.userLike)
//获取用户历史访问
router.get('/userHis',userHandler.userHis)

module.exports = router