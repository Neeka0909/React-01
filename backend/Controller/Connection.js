const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

const connection = con.connect((err) => {
    if (err) throw err;
    console.log("MySql Database Connected!");
});

module.exports = connection;