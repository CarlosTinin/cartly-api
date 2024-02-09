export default (sequelize, Sequelize) => {
    const RecipeIngredient = sequelize.define('recipe_ingredient', {
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      recipe_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Recipe, 
          key: 'id'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: Product, 
          key: 'id'
        }
      }
    });  
    return RecipeIngredient;
  };