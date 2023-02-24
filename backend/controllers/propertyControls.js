const {properties} = require("../models/properties.js")


const listProperty = async (req,res) =>{
    const listed = {
        rentAmount: req.body.rentAmount,
        propertType: req.body.propertyType,
        location: req.body.location,
        address: req.body.address,
        pictureOne: req.body.pictureOne,
        pictureTwo: req.body.pictureTwo,
        pictureThree: req.body.pictureThree,
        description: req.body.description
    }

    properties.create(listed).then(() =>{
        console.log("data created")
        res.status(200).json([{ message: "data created" }])
    }).catch(err=>{
        console.log(err)
        res.status(403).json([{ message: "err" }])
    })
    
}
const fetchProperty = async (req,res) =>{
    properties.findAll().then((result)=>{
        console.log(result)
        res.send(result)
    })
}
module.exports = {listProperty, fetchProperty}