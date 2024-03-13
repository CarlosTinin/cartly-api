'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductPriceHistory extends Model {
    static associate(models) {
      this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product'});
    }
  }
  ProductPriceHistory.init({
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'ProductPriceHistory',
  });
  return ProductPriceHistory;
};