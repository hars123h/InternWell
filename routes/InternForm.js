const express = require('express');
const router = express.Router();

const {internFormValidator} = require('../validators/internForm');
const { runValidation } = require('../validators');
const { internForm } = require('../controllers/internForm');



router.post('/internForm', internFormValidator, runValidation,  internForm)


module.exports = router;