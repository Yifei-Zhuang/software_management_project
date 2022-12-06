const joi = require('joi')

const username = joi.string().alphanum().min(1).max(20).required()  //字符数字1-20位
const password = joi.string().pattern(/^[\S]{6,20}$/).required()    //6-20位非特殊字符
const phone = joi.string().length(11).required()    //电话
const category = joi.string().valid('common','expert','admin','')
const serch_kind = joi.string().valid('entry_name','aliass','english_name','medicinal_part','morphology','distributions','harvests','medicinal_properties','nature_taste','efficacy','clinical_usage','pharmacology','chemical_components','contraindications','extension')
const serch_text = joi.string()
//定义验证注册和登录表单数据的规则对象
exports.reg_schema = {
    body:{
        username,
        password,
        phone,
        category
    },

}

exports.login_schema = {
    body:{
        username,
        password
    },
}

exports.Search_schema = {
    body : {
        serch_kind, //搜索类型(搜什么 药名？英文名？)
        serch_text
    }
}