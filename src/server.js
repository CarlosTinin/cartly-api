const express = require("express");
const router = require("./routes/routes.js");
const dotenv = require("dotenv");
require('./database');

const server = express()
dotenv.config();
const PORT = process.env.NODE_PORT | 3000

/** Begin - Rotas da API */
server.use(express.json()) // Set Express server to receive Content-type application/json
server.use("/api", router)

server.use(function(req, res) {
    res.status(404);
    res.json({ data: [], message: "Route not found."});
});

/** End - Rotas da API */

server.listen(PORT, function () {
    console.log('Server listening on port ' + PORT)
});