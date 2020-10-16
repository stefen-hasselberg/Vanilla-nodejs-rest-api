const products = require('../data/project');
const { v4: uuidv4 } = require('uuid');

const { writeDataToFile } = require('../utils');

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);

    if (product) {
      resolve(product);
    } else {
      reject('Product not found ');
    }
  });
}

function createProduct(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { ...product, id: uuidv4() };

    products.push(newProduct);

    writeDataToFile('./data/products.json', products);
    resolve(products);
  });
}

exports.findAll = findAll;
exports.findById = findById;
exports.createProduct = createProduct;
