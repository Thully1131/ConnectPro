const sequelize = require("./config/connections");
const { properties } = require("./models/properties");


sequelize.sync({force:true}).then(rs=>{
    console.log(rs)
}).catch(err=>{
    console.log(err)
})