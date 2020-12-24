const jwt = require("jsonwebtoken");

module.exports = (router) => {
  router.get("/", async (req, res) => {
    const token = jwt.sign({ data: "userid" }, "secret", { expiresIn: "30m" });

    try {
      const response = { status: 200, message: "token generated", token };
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
    }
  });
  return router;
};
