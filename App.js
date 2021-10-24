const express = require("express");
const cors = require('cors');
const app = express();
const router = express.Router();
const sequelize = require("./database/dbconfig");

require("./database/associations");

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("/", router);
app.use("/api/balance", require("./routes/balance"));
app.use("/api/user", require("./routes/user"));

app.listen(3000, () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("synchronized tables");
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  console.log("listening: http://localhost:3000");
});