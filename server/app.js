require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const { sequelize, User, Company, Address } = require("./models");

app.use(express.json());

app
  .get("/users/:id", async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
      },
      attributes: [
        "id",
        "firstName",
        "lastName",
        "username",
        "email",
        "contactNumber",
        "registerDate",
      ],
      include: [
        {
          model: Address,
          as: "billingAddress",
          attributes: ["street", "suburb", "postcode", "state"],
        },
        {
          model: Company,
          as: "company",
          attributes: ["website", "name", "phone"],
          include: [
            {
              model: Address,
              as: "address",
              attributes: ["street", "suburb", "postcode", "state"],
            },
          ],
        },
      ],
    });

    fs.writeFileSync(
      path.join(__dirname, `/data/user-data${user.id}.json`),
      JSON.stringify(user)
    );

    res.status(200).json(user);
  })
  .post("/users", async (req, res) => {
    const {
      firstName,
      lastName,
      username,
      street,
      postcode,
      website,
      name,
      phone,
    } = req.body;

    try {
      const user = await User.create({
        firstName,
        lastName,
        username,
      });

      await user.createBillingAddress({ street, postcode });
      await user.createCompany({ website, name, phone });
      const company = await user.getCompany();
      const address = await company.createAddress({ street, postcode });

      res.status(200).json({ user, company, address });
    } catch (err) {
      console.log(err);
    }
  });

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
