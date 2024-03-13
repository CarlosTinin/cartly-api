'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.belongsTo(models.Brand, { foreignKey: 'brand_id', as: 'brand'});
      this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category'});
      this.hasMany(models.ProductPriceHistory, { foreignKey: 'product_id', as: 'price_history'});
      this.belongsToMany(models.Recipe, { foreignKey: 'product_id', through: 'recipe_ingredients', as: 'recipes' });
      this.belongsToMany(models.Pantry, { foreignKey: 'product_id', through: 'pantry_products', as: 'pantries' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    actual_price: DataTypes.DOUBLE,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};