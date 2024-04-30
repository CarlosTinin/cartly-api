import { Router } from "express";
import { index, store, findById } from '../controllers/products';
import { errorHandler } from "../middlewares/errorHandler";

const productRoutes : Router = Router();

productRoutes.get('/', errorHandler(index));
productRoutes.get('/:id', errorHandler(findById));
productRoutes.post('/', errorHandler(store));

export default productRoutes;