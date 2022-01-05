var myModel = require('../model/mymodel');
const Quiz = require('../model/quiz');
const Auth = require('../model/auth');

// home page after login
const home_index = (req, res) => {
    // console.log(req.session);
    if (req.session.user) {
        let data1
        let data2
        myModel.getallparentscategory(function(data) {
            data1 = data;
            // res.render('index.ejs', { user: req.session.user, parentcategoryData: data });
        });
        myModel.getchildcategory(function(data) {
            data2 = data;
            // res.render('index.ejs', { user: req.session.user, parentcategoryData: data1, getchildcategory: data2 });
        });
        Quiz.find().sort({ createdAt: -1 })
            .then((result) => {
                res.render('index.ejs', { user: req.session.user, parentcategoryData: data1, getchildcategory: data2, allquestions: result });
            });

    } else {
        res.redirect('/login')
    }
};
// add question and anwser category
const homepost_index = (req, res) => {

    // filter the correct answers
    req.body.corectanswer = req.body.corectanswer.filter(rmfalse => rmfalse != "false");

    const quiz = new Quiz(req.body);
    console.log(quiz);

    quiz.save()
        .then((result) => {
            res.redirect('/');
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
};

const delete_index = (req, res) => {
    // to access the id in URL, must add :id
    const id = req.params.id;
    // we delete but must send json back, cause we use script  ruring in browser
    Quiz.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirection: '/' });
        })
        .catch(err => {
            console.log(err);
        });
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
    var query = { email: req.body.email, password: req.body.password };
    Auth.find(query)
        .then((result) => {
            // console.log(result[0].role)
            if (result.length > 0 && result[0].role == "admin") {
                req.session.user = req.body.email;
                res.redirect('/');
                console.log("admin loged successfully");
            } else {
                res.redirect('/login');
                console.log("wrong email or password");
            }
        })
        .catch((err) => {
            console.log(err);
        })
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
    // filter the correct answers

    const auth = new Auth(req.body);
    // console.log(auth);

    auth.save()
        .then((result) => {
            res.redirect('/');
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
};


module.exports = {
    home_index,
    homepost_index,
    delete_index,
    category_index,
    categorypost_index,
    login_index,
    logout_index,
    loginpost_index,
    register_index,
    registerpost_index,
}




















// ================================
// myModel.login(loginDetails, function(data) {
//     if (data.length > 0 && data[0].role == "admin") {
//         req.session.user = req.body.email;
//         res.redirect('/');
//         console.log("admin loged successfully");
//     } else if (data.length > 0 && data[0].role == "user") {
//         res.redirect('/test');
//         console.log("user loged successfully");
//     } else {
//         res.redirect('/login');
//         console.log("wrong email or password");
//     }
// });

// const registerpost_index = (req, res) => {
//     const registerDetails = req.body;
//     myModel.register(registerDetails, function(data) {
//         res.redirect('/login');
//         console.log("user inserted successfully");
//         // console.log(data);
//     });
// };


// const loginpost_index = (req, res) => {
//     const loginDetails = req.body;
//     myModel.login(loginDetails, function(data) {
//         if (data.length > 0 && data[0].role == "admin") {
//             req.session.user = req.body.email;
//             res.redirect('/');
//             console.log("admin loged successfully");
//         } else if (data.length > 0 && data[0].role == "user") {
//             res.redirect('/test');
//             console.log("user loged successfully");
//         } else {
//             res.redirect('/login');
//             console.log("wrong email or password");
//         }
//     });
// };
// ================================
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