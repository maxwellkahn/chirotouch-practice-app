const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");
const db = require("../config/database");

const Patient = new db.sequelize.define(
  "Patient",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, createdAt: true, updatedAt: "updateTimestamp" }
);

console.log(Patient === sequelize.models.Patient);
