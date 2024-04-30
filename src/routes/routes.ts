import { Router } from "express";
import userRoutes from "./userRoutes";
import productRoutes from "./productRoutes";
import categoryRoutes from "./categoryRoutes";
import brandRoutes from "./brandRoutes";

const rootRouter: Router = Router();

rootRouter.use('/users', userRoutes);
rootRouter.use('/products', productRoutes);
rootRouter.use('/categories', categoryRoutes);
rootRouter.use('/brands', brandRoutes);
// server.use(function(req, res) {
//   res.status(404);
//   res.json({ data: [], message: "Rota não encontrada."});
// });

export default rootRouter;