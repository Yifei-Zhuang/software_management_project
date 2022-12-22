//管理员审核升级申请，审核词条修改申请，用户申请升级，用户提出修改意见，用户添加收藏，添加喜欢
//需要token的用户操作
const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user_work')
const expressJOI = require('@escook/express-joi')

const { userFavor_schema, userupgrade_schema, entryupdate_schema, Examupgrade_schema, Examedit_schema, addUserFavor_schema, userLike_schema, userChange_schema, delLike_schema, delFavor_schema, delupGrade_schema, delEdit_schema } = require('../schema/user_work')
//用户升级申请
router.post('/userUpgrade', expressJOI(userupgrade_schema), userHandler.userUpgrade)
//用户修改申请
router.post('/entryUpdate', expressJOI(entryupdate_schema), userHandler.entryUpdate)
//管理员审核用户升级
router.post('/Examupgrade', expressJOI(Examupgrade_schema), userHandler.Examupgrade)
//管理员审核修改意见
router.post('/Examedit', expressJOI(Examedit_schema), userHandler.Examedit)
//查询用户收藏
router.post('/userFavor', expressJOI(userFavor_schema), userHandler.userFavor)
//用户添加收藏
router.post('/addUserFavor', expressJOI(addUserFavor_schema), userHandler.addUserFavor)
//用户添加喜欢
router.post('/userLike', expressJOI(userLike_schema), userHandler.userLike)
//用户修改个人信息
router.post('/userChange', expressJOI(userChange_schema), userHandler.userChange)
//删除用户喜欢
router.post('/delLike', expressJOI(delLike_schema), userHandler.delLike)
//删除用户收藏
router.post('/delFavor', expressJOI(delFavor_schema), userHandler.delFavor)
//用户删除升级申请
router.post('/delupGrade', expressJOI(delupGrade_schema), userHandler.delupGrade)
//用户删除词条修改申请
router.post('/delEdit', expressJOI(delEdit_schema), userHandler.delEdit)
module.exports = router