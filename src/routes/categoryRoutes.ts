import { Router } from "express";
import { index, store, findById } from '../controllers/categories';
import { errorHandler } from "../middlewares/errorHandler";

const categoryRoutes : Router = Router();

categoryRoutes.get('/', errorHandler(index));
categoryRoutes.get('/:id', errorHandler(findById));
categoryRoutes.post('/', errorHandler(store));

export default categoryRoutes;