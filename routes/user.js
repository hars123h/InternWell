const express = require('express');
const router = express.Router();
const {contactValidator, internFormValidator} = require('../validators/auth');
const { runValidation } = require('../validators');



// import controller
const { requireSignin, adminMiddleware } = require('../controllers/auth');

 const { read, update, contactForm, internForm } = require('../controllers/user');



 router.get('/user/:id', requireSignin, read);
 router.put('/user/update', requireSignin, update);
 router.put('/admin/update', requireSignin, adminMiddleware, update);
 router.post('/contact', contactValidator, runValidation,  contactForm);
 router.post('/intern-form', internFormValidator, runValidation,  internForm);

 
module.exports = router;