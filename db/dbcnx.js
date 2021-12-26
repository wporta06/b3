const mysql = require('mysql');

// creatpoot is beter than createConnection (close cnx avry time)
var cnx = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quiz"
});
cnx.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to db");
});


module.exports = cnx;