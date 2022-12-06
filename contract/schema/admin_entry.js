const joi = require('joi')
// 以下字段除image_url之外均为必填
// id
const entry_id = joi.number().required().min(0)
// 中药名
const entry_name = joi.string().min(1).max(20).required();
// 图像链接
const image_url = joi.string();
// 别名
const aliass = joi.string().required();
// 英文名
const english_name = joi.string().required();
// 药用部位
const medicinal_part = joi.string().required()
// 植物形态
const morphology = joi.string().required()
// 产地分布
const distributions = joi.string().required()
// 采收加工
const harvests = joi.string().required();
// 药材性状
const medicinal_properties = joi.string().required()
// 性味归经
const nature_taste = joi.string().required()
// 功效和作用
const efficacy = joi.string().required()
// 临床使用
const clinical_usage = joi.string().required()
// 药理研究
const pharmacology = joi.string().required();
// 化学成分
const chemical_components = joi.string().required()
// 使用禁忌
const contraindications = joi.string().required();
// 扩展部分
const extension = joi.string();
// 管理员添加词条
exports.entry_add_schema = {
    body: {
        entry_name,
        image_url,
        aliass,
        english_name,
        medicinal_part,
        morphology,
        distributions,
        harvests,
        medicinal_part,
        medicinal_properties,
        nature_taste,
        efficacy,
        clinical_usage,
        pharmacology,
        chemical_components,
        contraindications,
        extension,
    }
}
// 管理员删除词条
exports.entry_delete_schema = {
    body: {
        entry_id
    }
}

// 管理员编辑词条
exports.entry_update_schema = {
    body: {
        entry_id,
        entry_name,
        image_url,
        aliass,
        english_name,
        medicinal_part,
        morphology,
        distributions,
        harvests,
        medicinal_part,
        medicinal_properties,
        nature_taste,
        efficacy,
        clinical_usage,
        pharmacology,
        chemical_components,
        contraindications,
        extension,
    }
}

