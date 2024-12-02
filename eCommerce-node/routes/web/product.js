const express = require('express');
const router = express.Router();
const productController = require('../../controller/web/productController');

router.post('/list', productController.list);
router.get('/:id', productController.getItem);

module.exports = router