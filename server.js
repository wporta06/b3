const express = require('express');
const app = express();
// const bodyparser = require('body-parser');
const session = require('express-session');
//for css
app.use(express.static('public'));

// const bcrypt = require('bcrypt');

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));

const Routers = require('./routes/allRoutes');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

app.set('view-engine', 'ejs');

// allow us to access the form data from req in POST  
app.use(express.urlencoded({ extended: false }));

app.use('/', Routers);
app.use('/login', Routers);
app.post('/login', Routers);
app.use('/logout', Routers);
app.use('/register', Routers);

app.listen(3000)
























// ================================================================

// app.get('/', (req, res) => {
//     if (req.session.user) {
//         res.render('index.ejs', { user: req.session.user })
//     } else {
//         res.redirect('/login')
//     }
// })

// app.get('/login', (req, res) => {
//     res.render('login.ejs')
// })

// app.post('/login', (req, res) => {

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

// })


// app.get('/logout', (req, res) => {
//     req.session.destroy(function(err) {
//         if (err) {
//             console.log(err);
//             res.send("Error");
//         } else {
//             res.redirect('/login')
//         }
//     })

// })


// app.get('/register', (req, res) => {
//     res.render('register.ejs')

// })


// app.post('/register', async(req, res) => {

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
// })