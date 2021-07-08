  
const { check } = require('express-validator');

exports.userSignupValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];
exports.internFormValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
    check('course')
    .not()
    .isEmpty()
    .withMessage('Course Field  is required'),
    check('hire')
    .isLength({ min: 6 })
    .withMessage('Message must be at least  6 characters long'),
    check('hear')
    .isLength({ min: 6 })
    .withMessage('Message must be at least  6 characters long'),
    check('message')
    .isLength({ min: 15 })
    .withMessage('Message must be at least  15 characters long'),
    check('linkedin')
    .not()
    .isEmpty()
    .withMessage('linkedin Url is  required'),
    
];

exports.contactValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('message')
        .isLength({ min: 15 })
        .withMessage('Message must be at least  15 characters long')
];

exports.userSigninValidator = [
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];
exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
];

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];