const Sequelize = require('sequelize');
const sequelize = require("../config/connections.js");

const properties = sequelize.define("properties", {
    property_ID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    rentAmount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    propertType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pictureOne: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    pictureTwo: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    pictureThree: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
})
 
module.exports = {properties}