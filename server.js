const http = require('http');

const {
  getProducts,
  getProduct,
  createProduct,
} = require('./controllers/productsController');

console.log('products controller ', getProducts);

const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/html');

  //   res.write('<h1>Hello World</h1>');
  //   res.end();

  if (req.url === '/api/products' && req.method === 'GET') {
    console.log('get products');
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === 'GET'
  ) {
    const id = req.url.split('/')[3];
    getProduct(req, res, id);
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  } else {
    console.log('unknow route');
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'route not found' }, null, 2));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
