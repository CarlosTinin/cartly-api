import { Router } from "express";
import { index, store, findById, update } from '../controllers/products';
import { errorHandler } from "../middlewares/errorHandler";

const productRoutes : Router = Router();

productRoutes.get('/', errorHandler(index));
productRoutes.get('/:id', errorHandler(findById));
productRoutes.post('/', errorHandler(store));
productRoutes.put('/:id', errorHandler(update));

export default productRoutes;