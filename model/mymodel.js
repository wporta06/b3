const con = require('../db/dbcnx');

module.exports = {

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