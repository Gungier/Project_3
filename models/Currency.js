"use strict"
 const Sequelize = require("sequelize")
 const db = require("../database/db")

 module.exports = db.sequelize.define(
    "currency",
   {
       id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       currency_name: {
           type: Sequelize.STRING
       },
       user_id: {
        type: Sequelize.INTEGER,
       },
       updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
       },
       created_at: {
           type: Sequelize.DATE,
           defaultValue: Sequelize.NOW
       }
   },
{
   timestamps: false
});
{
    return currency;
}