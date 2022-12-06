const joi = require('joi')

const user_id = joi.number().min(1).required();
const entry_id = joi.number().min(1).required();
// 这里因为不需要支持对评论进行评论，所以无需此字段
const comment_detail = joi.string().required()

exports.do_comment_schema = {
    user_id,
    entry_id,
    comment_detail
}

