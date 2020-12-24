const fs = require("fs");
const path = require("path");
const https = require("https");
const { User, Company, Address } = require("../models");
const { authenticateJWT } = require("../util/auth");

module.exports = (router) => {
  router
    .get("/:id", authenticateJWT, async (req, res) => {
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
      const file = `../data/${fileName}`;

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
            if (err) throw err;
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
    .post("/", async (req, res) => {
      const {
        firstName,
        lastName,
        username,
        email,
        contactNumber,
        customerStreet,
        customerPostcode,
        customerSuburb,
        customerState,
        website,
        companyName,
        companyPhoneNumber,
        companyStreet,
        companyPostcode,
        companySuburb,
        companyState,
      } = req.body;

      try {
        const user = await User.create({
          firstName,
          lastName,
          username,
          email,
          contactNumber,
        });

        await user.createBillingAddress({
          postcode: customerPostcode,
          state: customerState,
          street: customerStreet,
          suburb: customerSuburb,
        });
        await user.createCompany({
          website: website,
          name: companyName,
          phone: companyPhoneNumber,
        });
        const company = await user.getCompany();
        const address = await company.createAddress({
          postcode: companyPostcode,
          state: companyState,
          street: companyStreet,
          suburb: companySuburb,
        });

        res.status(200).json({ user, company, address });
      } catch (err) {
        console.log(err);
      }
    });
  return router;
};
