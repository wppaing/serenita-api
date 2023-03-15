const Product = require('../models/Product');
const slugify = require('slugify');

exports.createProduct = (req, res, next) => {
  const { name } = req.body;
  let slug = slugify(name, { lower: true, strict: true });
  slug = slug + '-' + '63d94a44a8e17a8975e63d19';

  res.json({
    message: 'success',
    data: { ...req.body, slug },
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
