const { Sequelize, where } = require("sequelize")
const { Customer } = require("../models/customer.js")
const {properties} = require("../models/properties.js")
const Op = Sequelize.Op


// add new property
const listProperty = async (req,res) =>{
    const listed = {
        rentAmount: req.body.rentAmount,
        propertType: req.body.propertyType,
        location: req.body.location,
        address: req.body.address,
        pictureOne: req.body.pictureOne,
        pictureTwo: req.body.pictureTwo,
        pictureThree: req.body.pictureThree,
        description: req.body.description,
        minsalary: req.body.minSalary,
        creditscore: req.body.creditscore
    }
    
    properties.create(listed).then(() =>{
        console.log("data created")
        res.status(200).json([{ message: "data created" }])
    }).catch(err=>{
        console.log(err)
        res.status(403).json([{ message: "err" }])
    })
    
}
// find all property
const fetchProperty = async (req,res) =>{
    properties.findAll().then((result)=>{
        console.log(result)
        res.send(result)
    })
}
//searching
let searchObject = {};
const searching = async(req,res) =>{
    const key = req.body.keyWord
    if(typeof key === 'string' && key !== ''){
        properties.findAll({
            where:{
                [Op.or]: [{location:{[Op.like]:'%'+key+ '%'}},{address:{[Op.like]:'%'+key+ '%'}},{propertType:{[Op.like]:'%'+key+ '%'}}]
                
            }
        }).then((result)=>{ 
            searchObject = result
            console.log(searchObject)
            res.status(200).json([{ message: "searching" }])
        })
    }else {
        console.log('empty key')
        for (let key in searchObject){
            delete searchObject[key]
        }
    }
}

const foundProperties = async (req,res) =>{
    res.send(searchObject)
}
// eligibility
let eligibleObject ={};
const checkElible = async(req,res) =>{
    const mysalary = req.body.mysalary
    const mycreditscore = req.body.mycreditscore
    const property_ID = req.body.property_ID

    

    properties.findOne({
        where:{
            property_ID: property_ID
        }
    }).then((rs)=>{
        if(rs.dataValues.minsalary <= mysalary && rs.dataValues.creditscore <= mycreditscore){
            res.status(200).json([{ message: "you are eligible for this property" }])
            eligibleObject = rs
        } else {
            res.status(200).json([{ message: "you are NOT eligible for this property" }])
        }

    })

}
const propertyEligible = async (req,res) =>{
    res.send(eligibleObject)
}

// Login
const login = async (req,res) =>{
    const username = req.body.username
    const password = req.body.password
   
    Customer.findOne({
        where: {
            username: username
        }
    }).then(rs=>{
        if(rs){
            if(password == rs.dataValues.password){
                res.status(200).json([{ message: 'success' }])
            } else{
                res.status(200).json([{ message: "invalid" }]) 
            }
        } else{
            res.status(200).json([{ message: "invalid" }])
        }
    }).catch(err => {
        console.log(err)
    });
}
// Change password
const update = async (req,res) =>{
    const username = req.body.username
    const passWord = req.body.password
    const newPassword = req.body.newpassword

    Customer.findOne({
        where: {
            username: username
        }
    }).then(rs=>{
            if(passWord == rs.dataValues.password){
                Customer.update(
                    {password: `${newPassword}`},
                    {where: {password: `${passWord}`}}
                ).catch(err => err)
                res.status(200).json([{message: 'success'}])
            }else{
                res.status(200).json([{ message: "invalid" }])
            }
    }).catch(err => {
        console.log(err)
    });

}

module.exports = {listProperty, fetchProperty,searching,foundProperties,checkElible,propertyEligible,login,update}