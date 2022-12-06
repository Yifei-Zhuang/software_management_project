const joi = require('joi')
// 以下字段除image_url之外均为必填
// id
const entry_id = joi.number().required().min(0)

// 获取单个词条
exports.entry_get_single_entry_schema = {
    body: {
        entry_id,
    }
}

// 获取词条列表
exports.entry_get_entry_list_schema = {
    body: {
        begin: joi.number().min(0).required().default(0),
        end: joi.number().max(623).required().default(10)
    }
}

// 获取词条like和收藏数量，或许可以整合到entry_get_single_entry_schema中
exports.entry_get_like_favorite_entry_schema = {
    body: {
        entry_id,
    }
}

// 获取词条的所有评论，获取可以整合到 entry_get_single_entry_schema 中
exports.entry_get_comment_of_entry_schema = {
    body: {
        entry_id,
    }
}