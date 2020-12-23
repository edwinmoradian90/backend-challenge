"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Address, User }) {
      this.belongsTo(User, { foreignKey: "userId", as: "company" });
      this.hasOne(Address, { foreignKey: "companyId", as: "address" });
    }
  }
  Company.init(
    {
      website: DataTypes.STRING,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      addressId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "companies",
      modelName: "Company",
    }
  );
  return Company;
};
