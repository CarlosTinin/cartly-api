import express from "express"
import router from "./src/routes/routes.js"

const server = express()

const PORT = process.env.PORT | 3000

server.use("/api", router)

server.use(function(req, res, next) {
    res.status(404);
    res.json({ data: [], message: "Route not found."});
    next();
});

server.listen(PORT, () => {
    console.log('Server listening on port ' + PORT)
})