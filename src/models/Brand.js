'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: 'brand_id', as: 'products'});
    }
  }
  Brand.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};