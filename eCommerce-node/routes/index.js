const express = require('express');
const router = express.Router();

router.use('/admin', require('./admin'));
router.use('/web', require('./web'));

module.exports = router