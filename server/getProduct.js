const products = require('../products.json');

const product = (req, res) => {

   const product = products.find( product => product.id === +req.params.id)

   res.json(product);


}

module.exports = product;