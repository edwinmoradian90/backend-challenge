const helpers = require("../util/helpers");

it("returns a date as a string", () => {
  const humanReadableDate = helpers.generateReadableCreationDate();
  expect(typeof humanReadableDate).toEqual("string");
});
