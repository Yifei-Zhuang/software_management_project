const db = require('../db/index')
const bcryotjs = require('bcryptjs')
const Token = require('jsonwebtoken')
const configue = require('../configue')
exports.regUser = (req, res) => { //用户注册
    const userinfo = req.body
    console.log(userinfo)
    const sql = 'select * from user where username=?'
    const storage = 'insert into user set ?'
    db.query(sql, [userinfo.username], function (err, results) {
        if (err) {
            return res.cc(err)//res.cc返回函数
        }
        else if (results.length > 0) {
            return res.cc('用户名已存在')//禁止用户重名
        }
        else {
            userinfo.password = bcryotjs.hashSync(userinfo.password, 10)
            db.query(storage, userinfo, (err, results) => {
                if (err) return res.cc(err)
                if (results.affectedRows === 1) { return res.cc('success!', 0) }
                else
                    return res.cc('注册失败请重试')
            })
        }
    })
}

exports.Login = (req, res) => {//用户登录
    const userinfo = req.body
    sql = 'select * from user where username = ?'
    db.query(sql, userinfo.username, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('登陆失败')
        const answer = bcryotjs.compareSync(userinfo.password, results[0].password)
        if (!answer) return res.cc('密码错误')
        const user = { ...results[0], password: '', phone: '' }
        //加密生成Token
        const tokenstr = Token.sign(user, configue.jwtSecretKey, { expiresIn: configue.expiresIn })
        res.send({
            status: 0,
            messege: '登陆成功!',
            token: 'Bearer ' + tokenstr
        })
    })
}

exports.Search = (req, res) => {
    const Searchinfo = req.body
    sql = 'select * from entry where ' + Searchinfo.serch_kind + " like ? "
    db.query(sql, "%" + Searchinfo.serch_text + "%", (err, results) => {
        if (err) return res.cc(err)
        else {
            console.log(results, sql)
            return res.cc(results, 0)
        }
    })
}
exports.userName = (req, res) => {
    const user = req.body
    sql = 'select * from user where user_id = ?'
    db.query(sql, user.user_id, (err, results) => {
        if (err) return res.cc(err)
        else if (results.length === 1)
            return res.send({
                status: 0,
                message: results[0].username
            })
        else return res.cc('未知错误')
    })
}