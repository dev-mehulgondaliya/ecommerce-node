const express = require('express');
const router = express.Router();
const cartController = require('../../controller/admin/cartController');
const { updateCartValidation } = require('../../validation/cartValidation');
const validate = require('../../middleware/validate');

router.post('/list', cartController.list);
router.put('/update',validate(updateCartValidation), cartController.update);


module.exports = router