const express = require('express');
const router = express.Router();

const {NewsLetterValidator} = require('../validators/auth');
const { runValidation } = require('../validators');
const { newsLeterForm } = require('../controllers/newsLetter');



router.post('/newsLetter', NewsLetterValidator, runValidation,  newsLeterForm)


module.exports = router;
