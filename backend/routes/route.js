const express = require('express');
const { listProperty,fetchProperty } = require('../controllers/propertyControls');

const routeManger = express.Router();

routeManger.post('/registerProperty',listProperty)

routeManger.get('/fetchProperty',fetchProperty)

module.exports = { routeManger }