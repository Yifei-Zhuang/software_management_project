
const db = require('../db/index')
const { parseJwt } = require('../utils/jwtdecode')
// 获取单个词条
exports.getEntry = (req, res) => {
    const entry_id = req.body.entry_id;
    const sql = `select * from entry where entry_id = ?`
    // 检查是否有token
    const token = req.headers?.authorization;
    if (token) {
        const obj = parseJwt(token);
        const historySQL = `insert into browsing_history(user_id,entry_id) values (${obj.user_id},${entry_id})`
        try {
            db.query(historySQL, [], (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
        } catch (e) {

        }
    }
    db.query(sql, [entry_id], (err, result) => {
        if (err) {
            return res.status(400).cc(err)
        } else {
            res.status(200).send({
                status: 0,
                message: "获取成功",
                data: result[0]
            })
        }
    })
}
// 获取词条名
exports.getEntryName = (req, res) => {
    const entry_id = req.body.entry_id;
    const sql = `select * from entry where entry_id = ?`
    db.query(sql, [entry_id], (err, result) => {
        if (err) {
            return res.status(400).cc(err)
        } else {
            res.status(200).send({
                status: 0,
                message: "获取成功",
                data: result[0].entry_name
            })
        }
    })
}
// 获取词条列表
exports.getEntryList = (req, res) => {
    const { begin, end } = req.body;
    const sql = `select * from entry limit ?,?`
    db.query(sql, [begin, end], (err, result) => {
        if (err) {
            console.
                log(err)
            return res.status(400).cc(err)
        } else {
            res.status(200).send({
                status: 0,
                message: "获取成功",
                data: result
            })
        }
    })
}
// 获取词条like和收藏数量
exports.getEntryLikeAndFavorite = (req, res) => {
    const entry_id = req.body.entry_id;
    const sql_favorites = `select count(*) from user_favorites where entry_id = ?`
    const sql_like = `select count(*) from user_like where  entry_id = ?`
    try {
        db.query(sql_favorites, [entry_id], (err, result) => {
            if (err) {
                return res.status(400).cc(err)
            } else {
                const favorites = result[0]['count(*)']
                db.query(sql_like, [entry_id], (err, result) => {
                    if (err) {
                        return res.status(400).cc(err)
                    } else {
                        const likes = result[0]['count(*)']
                        res.status(200).send({
                            status: 0,
                            message: "获取成功",
                            data: {
                                favorites,
                                likes
                            }
                        })
                    }
                })
            }
        })
    } catch (err) {
        res.status(500).cc(err)
    }
}
// 获取词条评论
exports.getComments = (req, res) => {
    const { entry_id } = req.body;
    const sql = `select * from comment where entry_id = ?`
    db.query(sql, [entry_id], (err, result) => {
        if (err) {
            return res.status(400).cc(err)
        } else {
            res.status(200).send({
                status: 0,
                message: "获取成功",
                data: result
            })
        }
    })
}