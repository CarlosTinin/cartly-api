export default (sequelize, Sequelize) => {
  const Product = sequelize.define('product', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    actual_price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
    },
  });
  return Product;
};