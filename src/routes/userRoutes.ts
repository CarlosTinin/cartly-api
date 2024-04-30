import { Router } from "express";
import { index, store, findById } from '../controllers/users';
import { userPantries, createPantry } from '../controllers/pantries';
import { errorHandler } from "../middlewares/errorHandler";

const userRoutes : Router = Router();

userRoutes.get('/', errorHandler(index));
userRoutes.get('/:id', errorHandler(findById));
userRoutes.post('/', errorHandler(store));

userRoutes.get('/:user_id/pantries', errorHandler(userPantries));
userRoutes.post('/:user_id/pantries', errorHandler(createPantry));

export default userRoutes;