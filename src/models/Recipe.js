'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      this.belongsToMany(models.Product, { foreignKey: 'recipe_id', through: 'recipe_ingredients', as: 'products' })
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};