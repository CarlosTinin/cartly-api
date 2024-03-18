const Product = require('../models').Product;
const ProductPriceHistory = require('../models').ProductPriceHistory;

module.exports = {
  async store(req, res) {
    const { name, actual_price, category_id, brand_id } = req.body;

    const product_price_history = await ProductPriceHistory.create({ 
      price: actual_price,
      product: { 
        name,
        actual_price,
        category_id,
        brand_id
      }
    }, { include: { association: 'product'} });

    return res.status(201).json({ data: product_price_history.product, message: "Produto criado com sucesso!" });
  },

  async index(req, res) {
    const products = await Product.findAll();

    return res.status(200).json({ data: products, message: "Listagem dos produtos." })
  }
}