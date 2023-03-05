const Category = require('../models/Category');

exports.getAllCategories = (req, res, next) => {
  res.json({
    message: 'success',
    categories: [],
  });
};

exports.createCategory = (req, res, next) => {
  console.log(req.body);

  res.json({
    message: 'success',
    data: {
      id: 1,
      name: 'test',
    },
  });
};
