import { Router } from "express";
import userRoutes from "./userRoutes"

const rootRouter: Router = Router();

rootRouter.use('/users/', userRoutes);

export default rootRouter;

// // Pantry routes
// const PantryCtrl = new PantryController();
// appRoutes.get('/users/:user_id/pantry', PantryCtrl.userPantry);
// appRoutes.post('/users/:user_id/pantry', PantryCtrl.store);

// // Product routes
// const ProductCtrl = new ProductController();
// appRoutes.post('/products', ProductCtrl.store);
// appRoutes.get('/products', ProductCtrl.index);