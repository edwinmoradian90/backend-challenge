const fs = require("fs");
const path = require("path");
const express = require("express");

module.exports = (app) => {
  const files = fs.readdirSync(__dirname);
  files.forEach((file) => {
    if (file === "index.js") return;
    const router = express.Router();
    if (file !== "index.js") {
      app.use(
        "/" + file.replace(".js", ""),
        require(path.join(__dirname, file))(router)
      );
    }
  });
};
