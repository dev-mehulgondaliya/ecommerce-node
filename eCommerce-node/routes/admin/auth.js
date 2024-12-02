const express = require('express');
const router = express.Router();
const authController = require('../../controller/admin/authController');
const validate = require('../../middleware/validate');
const { loginValidation, signupValidation } = require('../../validation/authValidation');

router.post('/login',validate(loginValidation), authController.login);
router.post('/signup',validate(signupValidation), authController.signup);


module.exports = router