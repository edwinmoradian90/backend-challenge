require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize } = require("./models");

//Sending app instance to routes
require("./routes")(app);

//Middlewares
app.use(express.json());
app.use(cors());

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
