const express = require('express');
const { listProperty,fetchProperty,searching,foundProperties,checkElible,propertyEligible,login} = require('../controllers/propertyControls');

const routeManger = express.Router();

routeManger.post('/registerProperty',listProperty)
routeManger.post('/search',searching)
routeManger.post('/eligible',checkElible)
routeManger.post('/login',login)


routeManger.get('/fetchProperty',fetchProperty)
routeManger.get('/found',foundProperties)
routeManger.get('/propertyEligible',propertyEligible)

module.exports = { routeManger }