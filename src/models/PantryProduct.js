'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PantryProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PantryProduct.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PantryProduct',
  });
  return PantryProduct;
};