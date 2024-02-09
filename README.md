# API for the app cart.ly

Built with nodejs using docker

# Database Entities:
## users: 
* Attributes: id (Primary Key), name, email, password.
## products:
* Attributes: id (Primary Key), name, actual_price, image, brand_id (Foreign Key), category_id (Foreign Key).
## product_price_history:
* Attributes: id (Primary Key), product_id (Foreign Key), price.
## brands:
* Attributes: id (Primary Key), name.
## recipes:
* Attributes: id (Primary Key), title, description, instructions.
## recipe_ingredients:
* Attributes: id (Primary Key), recipe_id (Foreign Key), product_id (Foreign Key), quantity, unit.
## categories:
* Attributes: id (Primary Key), name.
## pantry_products:
* Attributes: id (Primary Key), pantry_id (Foreign Key), product_id (Foreign Key), quantity, unit, expire_date.
## pantries:
* Attributes: id (Primary Key), user_id (Foreign Key).