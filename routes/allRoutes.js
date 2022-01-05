const express = require('express');
const Controller = require('../controllers/controller');


// router is a var like app in app.js
const router = express.Router();

// show all blogs
router.get('/', Controller.home_index);
router.post('/', Controller.homepost_index);
router.delete('/:id', Controller.delete_index);
router.get('/category', Controller.category_index);
router.post('/category', Controller.categorypost_index);
router.get('/login', Controller.login_index);
router.post('/login', Controller.loginpost_index);
router.get('/logout', Controller.logout_index);
router.get('/register', Controller.register_index);
router.post('/register', Controller.registerpost_index);


// to use it in app.js (blogRouter)
module.exports = router;