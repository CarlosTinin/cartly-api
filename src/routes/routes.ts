import { Router } from "express";
import UserController from '../controllers/UserController';
import PantryController from "../controllers/PantryController";
import ProductController from "../controllers/ProductController";

export const appRoutes = Router();

appRoutes.get('/', (req, res) => {
    res.send('Hello World!');
})

// User routes
const UserCtrl = new UserController();
appRoutes.get('/users', UserCtrl.index);
appRoutes.get('/users/:id', UserCtrl.findById);
appRoutes.post('/users', UserCtrl.store);

// Pantry routes
const PantryCtrl = new PantryController();
appRoutes.get('/users/:user_id/pantry', PantryCtrl.userPantry);
appRoutes.post('/users/:user_id/pantry', PantryCtrl.store);

// Product routes
const ProductCtrl = new ProductController();
appRoutes.post('/products', ProductCtrl.store);
appRoutes.get('/products', ProductCtrl.index);