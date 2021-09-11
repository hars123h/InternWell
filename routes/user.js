const express = require('express');
const router = express.Router();
const {contactValidator} = require('../validators/auth');
const { runValidation } = require('../validators');



// import controller
const { requireSignin, adminMiddleware } = require('../controllers/auth');

 const { read, update, contactForm, updatePassword } = require('../controllers/user');



 router.get('/user/:id', requireSignin, read);
 router.put('/user/update', requireSignin, update);
 router.put('/user/password', requireSignin, updatePassword);
//  router.put('/admin/update', requireSignin, adminMiddleware, update);
 router.post('/contact', contactValidator, runValidation,  contactForm);

 
module.exports = router;