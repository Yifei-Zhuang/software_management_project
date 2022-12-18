//基础的用户注册，登录操作
const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user')
const entryHandler = require('../router_handler/entry_get')
const expressJOI = require('@escook/express-joi')

const { reg_schema, login_schema, Search_schema } = require('../schema/user')
const { entry_get_single_entry_schema, entry_get_entry_list_schema, entry_get_like_favorite_entry_schema, entry_get_comment_of_entry_schema } = require('../schema/entry_get')

router.post('/signup', expressJOI(reg_schema), userHandler.regUser)

router.post('/login', expressJOI(login_schema), userHandler.Login)

router.post('/Search', expressJOI(Search_schema), userHandler.Search)

router.post('/getEntry', expressJOI(entry_get_single_entry_schema), entryHandler.getEntry)
router.post('/getEntryList', expressJOI(entry_get_entry_list_schema), entryHandler.getEntryList)
router.post('/getEntryLF', expressJOI(entry_get_like_favorite_entry_schema), entryHandler.getEntryLikeAndFavorite)
router.post('/getComment', expressJOI(entry_get_comment_of_entry_schema), entryHandler.getComments)


module.exports = router