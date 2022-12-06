const db = require('../db/index')

exports.userUpgrade = (req, res) =>{ //用户升级申请
    const upgradeinfo = req.body
    sql1 = "select * from user_upgade_application where user_id=? and states!='rejected'"
    sql2 = 'insert into user_upgade_application set ?'
    db.query(sql1, upgradeinfo.user_id, (err, results)=>{
        if(err) return res.cc(err)
        if(results.length !== 0)
            return res.cc('用户无法申请')
        db.query(sql2,upgradeinfo,(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows===1)
                return res.cc('Success',0)
            else    return res.cc('未知错误!')
        })
    })
}

exports.entryUpdate = (req, res) =>{//用户修改词条申请
    const entryinfo = req.body
    const sql1 = 'select * from entry where entry_id = ?'
    const sql2 = 'insert into entry_edit_application set ?'
    db.query(sql1, entryinfo.entry_id, (err, results)=>{
        if(err) return res.cc(err)
        else if(results.length === 0)
            return res.cc('词条不存在')
        else
        {
            db.query(sql2, entryinfo, (err, results)=>{
                if(err) return res.cc(err)
                else if(results.affectedRows === 1)
                    return res.cc('Success',0)
                else return res.cc('未知错误!')
            })
        }
    })
}

//审核升级
exports.Examupgrade = (req, res) =>{
    const examinfo = req.body
    sql = 'update user_upgade_application set states = ? where application_id = ?'
    sql1 = "update user set category = 'expert' where user_id = ?"
    state = examinfo.accepted === 0 ? 'accepted' : 'rejected'
    db.query(sql,[state, examinfo.application_id], (err, results)=>{
        if(err) return res.cc(err)
        else if(results.affectedRows === 1 && examinfo.accepted === 0)
        {
            db.query(sql1, examinfo.user_id, (err, results)=>{
                if(err) return res.cc(err)
                if(results.affectedRows === 1)
                    return res.cc('seccess',0)
                else 
                    return res.cc(results)
            })
        }
        else if(examinfo.accepted === 1)
        {
            return res.cc('seccess',0)
        }
        else return res.cc('未知错误')
    })
}

//这个通过之后怎么修改词条呢?存疑
exports.Examedit = (req, res) =>{
    const examinfo = req.body
    sql = 'update entry_edit_application set states = ? where application_id = ?'
    state = examinfo.accepted === 0 ? 'accepted' : 'rejected'
    db.query(sql,[state, examinfo.application_id], (err, results)=>{
        if(err) return res.cc(err)
        else if(results.affectedRows === 1)
        {
            return res.cc('seccess',0)
        }

        else return res.cc('未知错误')
    })
}

exports.userFavor = (req, res) =>{
    const favorinfo = req.body
    sql = 'insert into user_favorites set ?'
    db.query(sql, favorinfo, (err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows === 1)
            return ('success',0)
        else return res.cc('未知错误')
    })
}

exports.userLike = (req, res) =>{
    const likeinfo = req.body
    sql = 'insert into user_favorites set ?'
    db.query(sql, likeinfo, (err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows === 1)
            return ('success',0)
        else return res.cc('未知错误')
    })
}

//用户修改信息
exports.userChange = (req, res) =>{
    userinfo = req.body
    sql = 'update user set ? where user_id = ?'
    db.query(sql, [userinfo, userinfo.user_id],(err, results)=>{
        if(err) return res.cc(err)
        else if(results.affectedRows === 1)
            return res.cc("success", 0)
        else return res.cc('未知错误')
    })
}

//下面是删除
exports.delLike = (req, res) =>{
    likeinfo = req.body
    sql = 'delete from user_like where user_id = ? and entry_id = ?'
    db.query(sql, [likeinfo.user_id, likeinfo.entry_id], (err, results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows === 1) return res.cc('success',0)
        else return res.cc('未知错误')
    })
}


exports.delFavor = (req, res) =>{
    Favorinfo = req.body
    sql = 'delete from user_favorites where user_id = ? and entry_id = ?'
    db.query(sql, [Favorinfo.user_id, Favorinfo.entry_id], (err, results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows === 1) return res.cc('success',0)
        else return res.cc('未知错误')
    })
}

exports.delupGrade = (req, res) =>{
     upGradeinfo = req.body
     sql1 = 'select * from user_upgade_application where application_id = ?'
     sql2 = 'delete from user_upgade_application where application_id = ?'
     db.query(sql1, upGradeinfo.application_id, (err, results)=>{
        if(err)     return res.cc(err)
        else if(results[0].user_id !== upGradeinfo.user_id)
        {
            return res.cc('错误操作!')
        }
        else{
            db.query(sql2, upGradeinfo.application_id, (err, results)=>{
                if(err) return res.cc(err)
                if(results.affectedRows === 1)  return res.cc('success',0)
                else return res.cc('未知错误')
            })
        }
     })
}

exports.delEdit = (req, res) =>{
    upGradeinfo = req.body
     sql1 = 'select * from entry_edit_application where application_id = ?'
     sql2 = 'delete from entry_edit_application where application_id = ?'
     db.query(sql1, upGradeinfo.application_id, (err, results)=>{
        if(err)     return res.cc(err)
        else if(results[0].user_id !== upGradeinfo.user_id)
        {
            return res.cc('错误操作!')
        }
        else{
            db.query(sql2, upGradeinfo.application_id, (err, results)=>{
                if(err) return res.cc(err)
                if(results.affectedRows === 1)  return res.cc('success',0)
                else return res.cc('未知错误')
            })
        }
     })
}

