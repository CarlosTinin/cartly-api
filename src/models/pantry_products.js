import Product from "./_products";
import Pantry from "./_pantries";

export default (sequelize, Sequelize) => {
  const PantryProduct = sequelize.define('pantry_product', {
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    unit: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    expires_date: {
      type: Sequelize.DATEONLY
    },
    pantry_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Pantry, 
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
  return PantryProduct;
};