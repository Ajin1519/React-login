const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "Wheatstone1#",
database:"reactdb" 
})

module.exports = db;