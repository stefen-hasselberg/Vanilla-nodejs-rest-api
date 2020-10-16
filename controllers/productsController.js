const Product = require('../models/productModel');

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products, null, 2));
  } catch (error) {
    console.log(error);
  }
}

// @desc  Get Single Project
// @route GET /api/products/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (product) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(product, null, 2));
    }
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: error }, null, 2));
  }
}

// @desc  Create a Product
// @route POST /api/products
async function createProduct(req, res, id) {
  try {
    const product = {
      title: 'TEST Product',
      description: 'This is my product',
      price: 100,
    };

    const newProduct = await Product.createProduct(product);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newProduct, null, 2));
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: error }, null, 2));
  }
}

exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.createProduct = createProduct;
