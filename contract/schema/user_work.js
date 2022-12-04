const joi = require('joi')

const user_id = joi.required()
const entry_id = joi.required()
const edit_reason = joi.string().required()
const edit_detail = joi.string().required()
const application_msg = joi.string().required()
const application_id = joi.required()
const accepted = joi.required()


//定义申请升级数据对象
exports.userupgrade_schema = {
    body:{
        user_id,
        application_msg
    },

}
//定义申请修改数据对象
exports.entryupdate_schema = {
    body:{
        user_id,
        entry_id,
        edit_reason,
        edit_detail
    },
}

//审核
exports.Examupgrade_schema = {
    body :{
        application_id,
        user_id,
        accepted // 0通过 1拒绝
    },
}

exports.Examedit_schema = {
    body :{
        application_id,
        entry_id,
        accepted
    },
}

//用户收藏,喜欢
exports.userFavor_schema = {
    body :{
        user_id,
        entry_id
    },
}

exports.userLike_schema = {
    body : {
        user_id,
        entry_id
    },
}