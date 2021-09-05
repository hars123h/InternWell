const { check } = require('express-validator');

exports.internFormValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('hear')
        .not()
        .isEmpty()
        .withMessage('Field is required'),
    check('hire')
        .not()
        .isEmpty()
        .withMessage('Field is required'),
    check('story')
        .not()
        .isEmpty()
        .withMessage('Field is required'),
    check('linkedIn')
        .not()
        .isEmpty()
        .withMessage('Type Your LinkedIn Url'),
    check('course')
        .not()
        .isEmpty()
        .withMessage('Select the Course'),
];