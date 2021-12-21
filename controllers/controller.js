var myModel = require('../model/mymodel');

// home page after login
const home_index = (req, res) => {
    if (req.session.user) {
        res.render('index.ejs', { user: req.session.user })
    } else {
        res.redirect('/login')
    }
};

// login page
const login_index = (req, res) => {
    res.render('login.ejs')
};
const loginpost_index = (req, res) => {
    const loginDetails = req.body;
    myModel.login(loginDetails, function(data) {
        console.log(data);
        if (data.length > 0) {
            req.session.user = req.body.email;
            res.redirect('/');
            console.log("user loged successfully");
        } else {
            res.redirect('/login');
            console.log("wrong email or password");
        }
    });
};
const logout_index = (req, res) => {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
            res.send("Error");
        } else {
            res.redirect('/login')
        }
    })
};

// register page
const register_index = (req, res) => {
    res.render('register.ejs')
};
const registerpost_index = (req, res) => {
    const registerDetails = req.body;
    myModel.register(registerDetails, function(data) {
        res.redirect('/login');
        console.log("user inserted successfully");
        // console.log(data);
    });
};


module.exports = {
    home_index,
    login_index,
    logout_index,
    loginpost_index,
    register_index,
    registerpost_index,
}




// ================================

// const loginpost_index = (req, res) => {

//     var email = req.body.email;
//     var pass = req.body.password;
//     var sql = 'SELECT * FROM auth WHERE email = ? AND password = ?';
//     con.query(sql, [email, pass], async function(err, result) {
//         if (err) throw err;

//         try {
//             if (result[0].email == email && result[0].password == pass) {
//                 // console.log("correct user");
//                 req.session.user = req.body.email;
//                 res.redirect('/');
//             }
//         } catch {
//             res.redirect('/login');
//         }
//     });
// };


// const registerpost_index = async(req, res) => {
//     try {
//         // const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         var sql = `INSERT INTO auth (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`;
//         con.query(sql, function(err, result, fields) {
//             if (err) throw err;
//             console.log("1 record inserted");
//             res.redirect('/login')

//         });
//     } catch {
//         res.redirect('/register')
//     }
// };