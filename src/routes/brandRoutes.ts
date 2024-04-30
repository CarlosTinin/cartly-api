import { Router } from "express";
import { index, store, findById } from '../controllers/brands';
import { errorHandler } from "../middlewares/errorHandler";

const brandRoutes : Router = Router();

brandRoutes.get('/', errorHandler(index));
brandRoutes.get('/:id', errorHandler(findById));
brandRoutes.post('/', errorHandler(store));

export default brandRoutes;