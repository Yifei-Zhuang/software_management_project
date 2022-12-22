// 管理员词条操作词条
const expressJoi = require('@escook/express-joi')
const express = require('express')
const router = express.Router()
const adminEntryHandler = require('../router_handler/admin_entry')

const { entry_add_schema, entry_delete_schema, entry_update_schema } = require('../schema/admin_entry')
//添加词条
router.post('/addEntry', expressJoi(entry_add_schema), adminEntryHandler.addEntry)
//删除词条
router.post('/deleteEntry', expressJoi(entry_delete_schema), adminEntryHandler.deleteEntry)
//编辑词条
router.post('/editEntry', expressJoi(entry_update_schema), adminEntryHandler.editEntry)

module.exports = router