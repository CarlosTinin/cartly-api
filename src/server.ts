import express from "express";
import dotenv from "dotenv";
//import { appRoutes } from "./routes/routes.js";
//import { database } from './config/database';

const server = express()
dotenv.config();
const PORT = process.env.NODE_PORT || 3000;

/** Begin - Rotas da API */
server.use(express.json()) // Set Express server to receive Content-type application/json
//server.use("/api", appRoutes)

server.use(function(req, res) {
    res.status(404);
    res.json({ data: [], message: "Rota não encontrada."});
});

/** End - Rotas da API */
server.listen(PORT, function () {
    console.log('Server listening on port ' + PORT)
});