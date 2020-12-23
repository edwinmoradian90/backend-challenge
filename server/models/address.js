"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Company, User }) {
      this.belongsTo(Company, { foreignKey: "companyId", as: "address" });
      this.belongsTo(User, { foreignKey: "userId", as: "billingAddress" });
    }
  }
  Address.init(
    {
      street: DataTypes.STRING,
      suburb: DataTypes.STRING,
      state: DataTypes.STRING,
      postcode: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "addresses",
      modelName: "Address",
    }
  );
  return Address;
};
