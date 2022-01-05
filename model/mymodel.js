const con = require('../db/dbcnx');

module.exports = {

    // add question and answer
    addquestion: function(questionDetails, callback) {
        // add question
        var sql = `INSERT INTO questions (question,correct_answer) VALUES ('${questionDetails.question}','${questionDetails.correctanwser}')`;

        con.query(sql, function(err, data) {
            // console.log(data);
            if (err) throw err;
            return callback(data);
        });

        var sql2 = `INSERT INTO answers (anwser,correct_answer) VALUES ('${questionDetails.anwser}','${questionDetails.correctanwser}')`;

        con.query(sql2, function(err, data) {
            // console.log(data);
            if (err) throw err;
            return callback(data);
        });
    },

    // add parent category
    addparentcategory: function(categoryDetails, callback) {
        if (categoryDetails.parentname !== "") {
            var sql = `INSERT INTO parentscategory (parent_category) VALUES ('${categoryDetails.parentname}')`;
        } else {
            // if (categoryDetails.childname !== "") {
            var sql = `INSERT INTO childscategory (child_category,parent_category_id) VALUES ('${categoryDetails.childname}','${categoryDetails.parentt}')`;
        }


        con.query(sql, function(err, data) {
            if (err) throw err;
            return callback(data);
        });
    },
    addchildcategory: function(categoryDetails, callback) {
        var sql = `INSERT INTO childscategory (child_category) VALUES ('${categoryDetails.childname}')`;
        con.query(sql, function(err, data) {
            if (err) throw err;
            return callback(data);
        });
    },

    // get all parent categorys
    getallparentscategory: function(callback) {
        var sql = 'SELECT * FROM parentscategory';
        con.query(sql, function(err, data, fields) {
            if (err) throw err;
            return callback(data);
        });
    },
    // get all child categorys
    getchildcategory: function(callback) {
        var sql = 'SELECT * FROM childscategory';
        con.query(sql, function(err, data, fields) {
            if (err) throw err;
            return callback(data);
        });
    },


    register: function(registerDetails, callback) {
        var sql = `INSERT INTO auth (name, email, password, role) VALUES ('${registerDetails.name}', '${registerDetails.email}', '${registerDetails.password}', '${registerDetails.role}')`;
        con.query(sql, function(err, data) {
            if (err) throw err;
            return callback(data);
        });
    },

    login: function(loginDetails, callback) {
        var email = loginDetails.email;
        var pass = loginDetails.password;

        var sql = `SELECT * FROM auth WHERE email = ? AND password = ?`;
        con.query(sql, [email, pass], async function(err, data) {

            try {
                if (data.length > 0) {
                    if (data[0].email == email && data[0].password == pass) {
                        console.log("correct user");
                        return callback(data);
                    }
                } else {
                    console.log("wrong user");
                    return callback(data);
                }
            } catch (error) {
                throw error
            }
        });
    },









    // ========================================
    // var email = req.body.email;
    // var pass = req.body.password;
    // var sql = 'SELECT * FROM auth WHERE email = ? AND password = ?';
    // con.query(sql, [email, pass], async function(err, result) {
    //     if (err) throw err;

    //     try {
    //         if (result[0].email == email && result[0].password == pass) {
    //             // console.log("correct user");
    //             req.session.user = req.body.email;
    //             res.redirect('/');
    //         }
    //     } catch {
    //         res.redirect('/login');
    //     }
    // });


}