const Product = require('../models/Product');

exports.createProduct = (req, res, next) => {
  const {} = req.body;

  res.json({
    message: 'success',
  });
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    total: 17,
    items: [],
  });
};

exports.getProductById = (req, res, next) => {
  const productId = req.params.id;

  res.json({
    id: productId,
  });
};
