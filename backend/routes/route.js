const express = require('express');
const { listProperty,fetchProperty,searching,foundProperties} = require('../controllers/propertyControls');

const routeManger = express.Router();

routeManger.post('/registerProperty',listProperty)
routeManger.post('/search',searching)


routeManger.get('/fetchProperty',fetchProperty)
routeManger.get('/found',foundProperties)

module.exports = { routeManger }