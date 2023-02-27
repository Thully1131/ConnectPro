const express = require('express');
const { listProperty,fetchProperty,searching,foundProperties,checkElible} = require('../controllers/propertyControls');

const routeManger = express.Router();

routeManger.post('/registerProperty',listProperty)
routeManger.post('/search',searching)
routeManger.post('/eligible',checkElible)


routeManger.get('/fetchProperty',fetchProperty)
routeManger.get('/found',foundProperties)

module.exports = { routeManger }