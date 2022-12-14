//主要负责向前端发送数据信息
//获取用户信息 获取用户收藏 获取用户喜欢 获取用户历史访问
//需要token的用户操作
const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user_get')
const expressJOI = require('@escook/express-joi')
const { isFavor_schema, isLike_schema } = require('../schema/user_work')
//获取用户信息
router.post('/userMsg', userHandler.userMsg)
//获取用户收藏
router.post('/userFavor', userHandler.userFavor)
//判断用户是否收藏了指定的词条
router.post('/isFavor', expressJOI(isFavor_schema), userHandler.isFavor)
//判断用户是否收点赞了指定的词条
router.post('/isLike', expressJOI(isLike_schema), userHandler.isLike)
//获取用户喜欢
router.post('/getLike', userHandler.getLike)
//获取用户历史访问
router.post('/userHis', userHandler.userHis)
//获取申请列表
router.post('/upgrade', userHandler.upgrade)
//获取修改列表
router.post('/edit', userHandler.edit)


module.exports = router