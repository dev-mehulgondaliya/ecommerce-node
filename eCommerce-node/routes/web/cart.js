const express = require('express');
const router = express.Router();
const cartController = require('../../controller/admin/cartController');
const validate = require('../../middleware/validate');
const { updateCartValidation } = require('../../validation/cartValidation');

router.post('/list', cartController.list);
router.put('/update',validate(updateCartValidation), cartController.update);


module.exports = router