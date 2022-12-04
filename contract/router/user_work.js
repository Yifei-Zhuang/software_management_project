//管理员审核升级申请，审核词条修改申请，用户申请升级，用户提出修改意见，用户添加收藏，添加喜欢
//需要token的用户操作
const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user_work')
const expressJOI = require('@escook/express-joi')

const {userupgrade_schema, entryupdate_schema,Examupgrade_schema} = require('../schema/user_work')
//用户升级申请
router.post('/userUpgrade',expressJOI(userupgrade_schema),userHandler.userUpgrade)
//用户修改申请
router.post('/entryUpdate',expressJOI(entryupdate_schema) ,userHandler.entryUpdate)
//管理员审核用户升级
router.post('/Examupgrade',expressJOI(Examupgrade_schema),userHandler.Examupgrade)
//管理员审核修改意见
router.post('/Examedit',expressJOI(Examedit_schema),userHandler.Examedit)
//用户添加收藏
router.post('/userFavor',expressJOI(userFavor_schema), userHandler.userFavor)
//用户添加喜欢
router.post('/userLike',expressJOI(userLike_schema), userHandler.userLike)
module.exports = router