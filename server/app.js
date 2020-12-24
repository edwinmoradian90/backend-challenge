require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./models");

//Middlewares
app.use(express.json());
app.use(cors());

//Sending app instance to routes
require("./routes")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  try {
    sequelize.authenticate();
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
});
