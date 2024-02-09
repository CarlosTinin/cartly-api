import User from "./_users";
import Brand from "./_brands";
import Recipe from "./_recipes";
import Product from "./_products";
import Pantry from "./_pantries";
import Category from "./_categories";
import PantryProduct from "./pantry_products";
import RecipeIngredient from "./recipe_ingredients";
import ProductPriceHistory from "./_product_price_history";

// User 1:1 Pantry 
User.hasOne(Pantry, {
  foreignKey: 'user_id'
});
Pantry.belongsTo(User, {
  foreignKey: 'user_id'
});

// Brand 1:n Product
Product.belongsTo(Brand, {
  foreignKey: 'brand_id'
});
Brand.hasMany(Product, {
  foreignKey: 'brand_id'
})

// Category 1:n Product
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Product 1:n ProductPriceHistory
Product.hasMany(ProductPriceHistory, {
  foreignKey: 'product_id'
});
ProductPriceHistory.belongsTo(Product, {
  foreignKey: 'product_id'
});

// Product n:n Recipe - RecipeIngredient
Product.belongsToMany(Recipe, {
  through: RecipeIngredient,
});
Recipe.belongsToMany(Product, {
  through: RecipeIngredient,
});

// Products n:n Pantry - PantryProduct
Product.belongsToMany(Pantry, {
  through: PantryProduct,
});
Pantry.belongsToMany(Product, {
  through: PantryProduct,
});