import { Router } from "express";
import { index, store, findById } from '../controllers/users';
import PantryController from "../controllers/PantryController";
import ProductController from "../controllers/ProductController";
import { errorHandler } from "../middlewares/errorHandler";

export const appRoutes = Router();

appRoutes.get('/', (req, res) => {
    res.send('Hello World!');
})

// User routes
appRoutes.get('/users', errorHandler(index));
appRoutes.get('/users/:id', errorHandler(findById));
appRoutes.post('/users', errorHandler(store));

// // Pantry routes
// const PantryCtrl = new PantryController();
// appRoutes.get('/users/:user_id/pantry', PantryCtrl.userPantry);
// appRoutes.post('/users/:user_id/pantry', PantryCtrl.store);

// // Product routes
// const ProductCtrl = new ProductController();
// appRoutes.post('/products', ProductCtrl.store);
// appRoutes.get('/products', ProductCtrl.index);