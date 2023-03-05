const express = require('express');
const controller = require('../controllers/productController');

const router = express.Router();

router.route('/').get(controller.getAllProducts).post(controller.createProduct);
router.route('/:id').get(controller.getProductById);

module.exports = router;
