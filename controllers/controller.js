var myModel = require('../model/mymodel');

// home page after login
const home_index = (req, res) => {
    // console.log(req.session);
    if (req.session.user) {
        res.render('index.ejs', { user: req.session.user })
    } else {
        res.redirect('/login')
    }
};
// add parent and child category
const homepost_index = (req, res) => {
    const questionDetails = req.body;
    myModel.addquestion(questionDetails, function(data) {
        console.log("question inserted successfully");
        // res.redirect('/');
        // header["lo"]
        // console.log(data);
    });

    res.redirect("/")
};

// category page 
const category_index = (req, res) => {
    if (req.session.user) {
        myModel.getallparentscategory(function(data) {
            res.render('category.ejs', { user: req.session.user, categoryData: data });
        });
    } else {
        res.redirect('/login')
    }
};
// add parent and child category
const categorypost_index = (req, res) => {
    const categoryDetails = req.body;
    myModel.addparentcategory(categoryDetails, function(data) {
        res.redirect('/category');
        console.log("parent category inserted successfully");
        console.log(data);
    });

};

// login page
const login_index = (req, res) => {
    res.render('login.ejs')
};
const loginpost_index = (req, res) => {
    const loginDetails = req.body;
    myModel.login(loginDetails, function(data) {
        if (data.length > 0 && data[0].role == "admin") {
            req.session.user = req.body.email;
            res.redirect('/');
            console.log("admin loged successfully");
        } else if (data.length > 0 && data[0].role == "user") {
            res.redirect('/test');
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
    homepost_index,
    category_index,
    categorypost_index,
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