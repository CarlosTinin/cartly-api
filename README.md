# API for the cart.ly app

Built with nodejs+typescript+prisma containerized with docker

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


# References:
1. Create ORM DB Structure using Prisma: <https://www.prisma.io/docs/orm/>
- VSCode Extension: Prisma
2. Makefile: <https://www.gnu.org/software/make/manual/make.html/>
3. TypeScript: <https://www.typescriptlang.org/docs/handbook/intro.html/>
4. Zod: <https://zod.dev//>