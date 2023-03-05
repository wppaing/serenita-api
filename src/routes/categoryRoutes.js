const express = require('express');
const controller = require('../controllers/categoryController');

const router = express.Router();

router
  .route('/')
  .get(controller.getAllCategories)
  .post(controller.createCategory);

module.exports = router;
