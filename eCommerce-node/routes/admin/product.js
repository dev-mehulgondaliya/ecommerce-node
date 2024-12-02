const express = require('express');
const router = express.Router();
const productController = require('../../controller/admin/productController');
const { createAndUpdateProductValidation } = require('../../validation/productValidation');
const validate = require('../../middleware/validate');
const { protect } = require('../../middleware/protect');

router.post('/list',protect, productController.list);
router.get('/:id', productController.getItem);
router.post('/create',validate(createAndUpdateProductValidation), productController.create);
router.put('/update/:id',validate(createAndUpdateProductValidation), productController.update);


module.exports = router