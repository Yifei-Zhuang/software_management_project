const db = require('../db/index')
const HTTP_BADREQUEST = 400;
exports.addEntry = (req, res) => {
    const newEntry = req.body;
    const sql = `insert into entry
                    (entry_name,
                    image_url,
                    aliass,
                    english_name,
                    medicinal_part,
                    morphology,
                    distributions,
                    harvests,
                    medicinal_properties,
                    nature_taste,
                    efficacy,
                    clinical_usage,
                    pharmacology,
                    chemical_components,
                    contraindications) values (${'?,'.repeat(14) + '?'})`
    db.query(sql, [newEntry.entry_name, newEntry.image_url ? newEntry.image_url : '', newEntry.aliass, newEntry.english_name, newEntry.medicinal_part, newEntry.morphology, newEntry.distribution, newEntry.harvests, newEntry.medicinal_properties, newEntry.nature_taste, newEntry.efficacy, newEntry.clinical_usage, newEntry.pharmacology, newEntry.chemical_components, newEntry.contraindications], (err, result) => {
        if (err && result?.affectedRows == 1) {
            return res.status(HTTP_BADREQUEST).cc(err);
        }
        else {
            res.send({
                status: 0,
                message: '添加词条成功'
            });
        }
    })
}
exports.deleteEntry = (req, res) => {
    const deleteEntry = req.body;
    const sql = `delete from entry where entry_id = ?`
    db.query(sql, [deleteEntry.entry_id], (err, result) => {
        if (err) {
            return res.status(500).cc(err)
        }
        else {
            res.status(200).send({
                status: 0,
                message: "删除成功"
            })
        }
    })
}
exports.editEntry = (req, res) => {
    // 直接进行全文替换
    const editEntry = req.body;
    const sql = `update entry set entry_name = ?, image_url = ?, aliass = ?, english_name = ?, medicinal_part = ?, morphology = ?, distributions = ?, harvests = ?, medicinal_properties = ?, nature_taste = ?, efficacy = ?, clinical_usage = ?, pharmacology = ?, chemical_components = ?, contraindications = ? where entry_id = ?`
    db.query(sql, [editEntry.entry_name, editEntry.image_url ? editEntry.image_url : '', editEntry.aliass, editEntry.english_name, editEntry.medicinal_part, editEntry.morphology, editEntry.distribution, editEntry.harvests, editEntry.medicinal_properties, editEntry.nature_taste, editEntry.efficacy, editEntry.clinical_usage, editEntry.pharmacology, editEntry.chemical_components, editEntry.contraindications, editEntry.entry_id], (err, result) => {
        if (err) {
            return res.status(400).cc(err);
        }
        else {
            res.status(200).send({
                status: 0,
                message: "编辑成功"
            })
        }
    })
}