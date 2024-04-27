import express from "express";
import dotenv from "dotenv";
import rootRouter from "./routes/routes";
import { errorMiddleware } from "./middlewares/errorFormatter"

const server = express()
dotenv.config();
const PORT = process.env.NODE_PORT || 3000;

/** Begin - Rotas da API */
server.use(express.json()) // Set Express server to receive Content-type application/json
server.use("/api", rootRouter)
server.use(errorMiddleware)
/** End - Rotas da API */

server.listen(PORT, function () {
    console.log('Servidor iniciado na porta: ' + PORT)
});