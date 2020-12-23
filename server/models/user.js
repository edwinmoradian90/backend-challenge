"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Company, Address }) {
      this.hasOne(Company, { foreignKey: "userId", as: "company" });
      this.hasOne(Address, { foreignKey: "userId", as: "billingAddress" });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 50],
        },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 50],
        },
      },
      username: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 50],
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      contactNumber: {
        type: DataTypes.STRING,
      },
      registerDate: {
        type: DataTypes.STRING,
        validate: {
          isDate: true,
        },
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
