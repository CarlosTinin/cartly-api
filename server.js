import express from "express"
import router from "./src/routes/routes.js"
import dotenv from "dotenv"
import db from "./src/models/index.js";

const server = express()
dotenv.config();
const PORT = process.env.NODE_PORT | 3000

/** Begin - MYSQL connection */
// setTimeout(() => {
//   db.sequelize.sync({ force: false }).then(function () {
//     server.listen(process.env.MYSQL_PORT || 3306, function () {
//       console.log("server is successfully running!");
//     });
//   });
// }, 2000);

/** End - MYSQL connection */

/** Begin - Rotas da API */
server.use("/api", router)
server.use(function(req, res) {
    res.status(404);
    res.json({ data: [], message: "Route not found."});
});
/** End - Rotas da API */



db.sequelize
  .authenticate()
  .then(() => {

    db.sequelize.sync({ force: false }).then(function () {
      server.listen(PORT, function () {
        console.log('Server listening on port ' + PORT)
      });
    });
    
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });