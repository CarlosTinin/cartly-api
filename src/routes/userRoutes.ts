import { Router } from "express";
import { index, store, findById } from '../controllers/users';
import { errorHandler } from "../middlewares/errorHandler";

const userRoutes:Router = Router();

userRoutes.get('/', errorHandler(index));
userRoutes.get('/:id', errorHandler(findById));
userRoutes.post('/', errorHandler(store));

export default userRoutes;