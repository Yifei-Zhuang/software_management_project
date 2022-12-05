const db = require('./index')
const totalData = require('../../data/total')
// 插入数据
sql = `insert into entry
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

totalData.forEach(entry => {
    db.query(sql, [
        entry['中药名'], entry['图像链接'], entry['别名'], entry['英文名'], entry['药用部位'], entry['植物形态'], entry['产地分布'], entry['采收加工'], entry['药材性状'], entry['性味归经'], entry['功效与作用'], entry['临床应用'], entry['药理研究'], entry['化学成分'], entry['使用禁忌']
    ], (err, results) => {
        if (err) {
            throw err
        }
    })
})

