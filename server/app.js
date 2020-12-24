require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const https = require("https");
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
    const fileName = `user-data-${user.id}.json`;
    const file = `/data/${fileName}`;

    fs.writeFileSync(path.join(__dirname, file), JSON.stringify(user));
    fs.readFile(path.join(__dirname, file), "utf8", function (err, data) {
      const req = https.request(
        "https://content.dropboxapi.com/2/files/upload",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.DROPBOX_TOKEN}`,
            "Dropbox-API-Arg": JSON.stringify({
              path: `/${fileName}`,
              mode: "overwrite",
              autorename: true,
              mute: false,
              strict_conflict: false,
            }),
            "Content-Type": "application/octet-stream",
          },
        },
        (res) => {
          console.log("statusCode: ", res.statusCode);
          console.log("headers: ", res.headers);

          res.on("data", function (d) {
            process.stdout.write(d);
          });
        }
      );

      req.write(data);
      req.end();
    });

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
