const joi = require('joi')
const username = joi.string().alphanum().min(1).max(20).required()
const phone = joi.string().length(11).required()
const password = joi.string().pattern(/^[\S]{6,20}$/).required()
const user_id = joi.required()
const entry_id = joi.required()
const edit_reason = joi.required()
const application_msg = joi.string().required()
const application_id = joi.required()
const accepted = joi.required()


//定义申请升级数据对象
exports.userupgrade_schema = {
    body: {
        user_id,
        application_msg
    },

}
//定义申请修改数据对象
exports.entryupdate_schema = {
    body: {
        user_id,
        entry_id,
        edit_reason
    },
}

//审核
exports.Examupgrade_schema = {
    body: {
        application_id,
        user_id,
        accepted // 0通过 1拒绝
    },
}

exports.Examedit_schema = {
    body: {
        application_id,
        entry_id,
        accepted
    },
}

//用户收藏,喜欢
exports.addUserFavor_schema = {
    body: {
        user_id,
        entry_id
    },
}


exports.isFavor_schema = {
    body: {
        user_id,
        entry_id
    }
}
exports.isLike_schema = {
    body: {
        user_id,
        entry_id
    }
}

exports.userLike_schema = {
    body: {
        user_id,
        entry_id
    },
}

exports.userChange_schema = {
    body: {
        user_id,
        username,
        phone,
        password
    }
}

// delLike_schema, delFavor_schema, delupGrade_schema, delEdit_schema
exports.delLike_schema = {
    body: {
        user_id,
        entry_id
    },
}

exports.delFavor_schema = {
    body: {
        user_id,
        entry_id
    },
}

exports.delupGrade_schema = {
    body: {
        application_id,
        user_id
    },
}

exports.delEdit_schema = {
    body: {
        application_id,
        user_id
    },
}