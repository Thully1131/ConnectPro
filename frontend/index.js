const express = require('express');
const app = express()
const port = 5555;

// view engine setup

app.set('view engine','ejs')
// app config
app.use(express.static('public'));

//routes
app.get('/',(req,res)=>{ 
    res.render("index");
})
app.get('/admin',(req,res)=>{ 
    res.render("admin");
})
app.get('/login',(req,res)=>{ 
    res.render("login");
})
app.get('/register',(req,res)=>{ 
    res.render("register");
})
app.get('/updatePassword',(req,res)=>{ 
    res.render("updatePassword");
})
app.get('/searchedProperty',(req,res)=>{
    res.render("search")
})
app.get('/contact',(req,res)=>{
    res.render("contact")
})
app.listen(port,()=>{
    console.log('server running')
})