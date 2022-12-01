const mysql = require('mysql')
const db = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : '2167957130Wqz+', // password
    database : 'sem'
})

module.exports = db 