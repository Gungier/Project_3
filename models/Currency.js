"use strict"
//  const Sequelize = require("sequelize")
//  const db = require("../database/db")

module.exports = function (sequelize, DataTypes) {
    var Currency = sequelize.define("Currency", {
       id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       currency_name: {
           type: DataTypes.STRING
       },
       user_id: {
        type: DataTypes.INTEGER,
       },
       updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
       },
       created_at: {
           type: DataTypes.DATE,
           defaultValue: DataTypes.NOW
       }
   },
{
   timestamps: false
})
Currency.associate = function (models) {
    Currency.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Currency;
};
