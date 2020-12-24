const jwt = require("jsonwebtoken");

module.exports = (router) => {
  router.get("/", async (req, res) => {
    const token = jwt.sign({ data: "userid" }, process.env.JWT_TOKEN, {
      expiresIn: "30m",
    });

    try {
      const response = { status: 200, message: "token generated", token };
      res.status(200).json(response);
    } catch (err) {
      return res.status(500);
    }
    return token;
  });
  return router;
};
