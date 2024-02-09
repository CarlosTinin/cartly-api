export default (sequelize, Sequelize) => {
  const ProductPriceHistory = sequelize.define('product_price_history', {
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  });
  return ProductPriceHistory;
};