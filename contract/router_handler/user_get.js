const db = require('../db/index')

exports.userMsg = (req, res) => {
    const user = req.body
    sql = 'select * from user where user_id = ?'
    db.query(sql, user.user_id, (err, results) => {
        if (err) return res.cc(err)
        else if (results.length === 1)
            return res.send({
                status: 0,
                message: results[0]
            })
        else return res.cc('未知错误')
    })

}

exports.userFavor = (req, res) => {
    const user = req.body
    sql = 'select * from user_favorites where user_id = ?'
    db.query(sql, user.user_id, (err, results) => {
        if (err) return res.cc(err)
        else
            return res.send({
                status: 0,
                message: results
            })
    })
}

exports.isFavor = (req, res) => {
    const { user_id, entry_id } = req.body;
    sql = `select * from user_favorites where user_id = ${user_id} and entry_id = ${entry_id}`
    db.query(sql, [], (err, results) => {
        if (err) {
            return res.cc(err)
        } else {
            console.log(results)
            res.send({
                status: 0,
                message: (results[0] ? true : false)
            })
        }
    })
}




exports.userLike = (req, res) => {
    const user = req.body
    sql = 'select * from user_like where user_id = ?'
    db.query(sql, user.user_id, (err, results) => {
        if (err) return res.cc(err)
        else
            return res.send({
                status: 0,
                message: results
            })
    })
}


exports.isLike = (req, res) => {
    const { user_id, entry_id } = req.body;
    sql = `select * from user_like where user_id = ${user_id} and entry_id = ${entry_id}`
    db.query(sql, [], (err, results) => {
        if (err) {
            return res.cc(err)
        } else {
            console.log(results)
            res.send({
                status: 0,
                message: (results[0] ? true : false)
            })
        }
    })
}

exports.userHis = (req, res) => {
    const user = req.body
    sql = 'select * from browsing_history where user_id = ?'
    db.query(sql, user.user_id, (err, results) => {
        if (err) return res.cc(err)
        else
            return res.send({
                status: 0,
                message: results
            })
    })
}

//获取升级申请列表
exports.upgrade = (req, res) => {
    var sql = "select * from user_upgade_application where states = \'pending\'"
    if (req.body.all === 1)
        sql = 'select * from user_upgade_application '
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        else
            return res.send({
                status: 0,
                message: results
            })
    })
}

exports.edit = (req, res) => {
    var sql = "select * from entry_edit_application where states = \'pending\'"
    if (req.body.all === 1)
        sql = 'select * from entry_edit_application'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err)
        else
            return res.send({
                status: 0,
                message: results
            })
    })
}