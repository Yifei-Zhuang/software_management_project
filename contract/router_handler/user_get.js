const db = require('../db/index')

exports.userMsg = (req, res) =>{
    const user = req.body
    sql = 'select * from user where user_id = ?'
    db.query(sql, user.user_id, (err,results)=>{
        if(err) return res.cc(err)
        else if(results.length === 1)
            return res.send({
                    status : 0,
                    message :  results[0]
                })
        else    return res.cc('未知错误')
    })
    
}

exports.userFavor = (req, res) =>{
    const user = req.body
    sql = 'select * from user_favorites where user_id = ?'
    db.query(sql, user.user_id, (err,results)=>{
        if(err) return res.cc(err)
        else
            return res.send({
                    status : 0,
                    message : results
                })
    })
}

exports.userLike = (req, res) =>{
    const user = req.body
    sql = 'select * from user_like where user_id = ?'
    db.query(sql, user.user_id, (err,results)=>{
        if(err) return res.cc(err)
        else
            return res.send({
                    status : 0,
                    message : results
                })
    })
}

exports.userHis = (req, res) =>{
    const user = req.body
    sql = 'select * from browsing_history where user_id = ?'
    db.query(sql, user.user_id, (err,results)=>{
        if(err) return res.cc(err)
        else
            return res.send({
                    status : 0,
                    message : results
                })
    })
}