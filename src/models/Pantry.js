'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pantry extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
      this.belongsToMany(models.Product, { foreignKey: 'pantry_id', through: 'pantry_products', as: 'products' });
    }
  }

  Pantry.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pantry',
  });
  return Pantry;
};