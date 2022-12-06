const db = require('../db/index')
exports.doComment = (req, res) => {
    const { user_id, entry_id, comment_detail } = req.body
    const usersql = `select username from user where user_id = ?`
    const sql = `insert into comment(user_id,entry_id,user_name,comment_detail) values (?,?,?,?)`
    db.query(usersql, [user_id], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(400).send(err)
        } else {
            let username = result[0]['username'];
            console.log(username)
            db.query(sql, [user_id, entry_id, username, comment_detail], (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(400).send(err)
                } else {
                    res.status(200).send({
                        status: 0,
                        message: "评论成功"
                    })
                }
            })
        }
    })
}