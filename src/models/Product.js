const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    // category: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Category',
    //   required: true,
    // },
    // brand: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // images: {
    //   type: [String],
    //   required: true,
    // },
    // isFeatured: {
    //   type: Boolean,
    //   default: false,
    // },
    // isActive: {
    //   type: Boolean,
    //   default: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
