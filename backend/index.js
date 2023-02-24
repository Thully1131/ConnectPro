const express = require('express');
const { routeManger } = require('./routes/route');
const dotenv = require('dotenv'); 
const bodyParser = require('body-parser');
const app = express();
const port = 4444;
const cors = require('cors');




dotenv.config()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',routeManger)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})