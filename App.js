const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const sequelize = require("./database/dbconfig");

app.use("/", router);
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"));
});

//rutas de la api
app.use("/api/persona", require("./routes/persona"));

app.listen(3000, () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("tablas sincronizadas");
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  console.log("Servidor escuchando en http://localhost:3000");
});