const express = require('express');
const multer = require('multer');
const router = express.Router();

const uploadRoute = require('./uploadRoute');
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/upload', multer().single('file'), uploadRoute);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
