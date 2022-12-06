//主要负责向前端发送数据信息
//获取用户信息 获取用户收藏 获取用户喜欢 获取用户历史访问
//需要token的用户操作
const express = require('express')
const router = express.Router()
const commentHandler = require('../router_handler/comment')
const expressJOI = require('@escook/express-joi')
const { do_comment_schema } = require('../schema/comment')
router.post('/doComment', expressJOI(do_comment_schema), commentHandler.doComment)

module.exports = router