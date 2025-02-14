const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/product', require('./product'));
router.use('/cart', require('./cart'));

module.exports = router