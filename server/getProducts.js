const products = require("../products.json");

const getProducts = (req, res) => {

   if (req.query.price) {
      const filteredPrice = products.filter(product => {
         return product.price >= +req.query.price
      });
      res.status(200).json(filteredPrice)
   } else {
      res.status(200).json(products);
   }
}

module.exports = getProducts;