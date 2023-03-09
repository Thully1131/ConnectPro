const Sequelize = require('sequelize');
const sequelize = require("../config/connections.js");

const Customer = sequelize.define("customer",{
    customer_ID:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    mobile:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.TEXT,
        allowNull:false
    }

})

module.exports = {Customer}