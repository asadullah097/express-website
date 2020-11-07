const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { urlencoded } = require("body-parser");

const app=express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//middleware

app.use(bodyParser.json());

app.use(urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

//route 
app.get('/',(req,res)=>{
    res.render('index',{title: 'Welcome'});
});
app.get('/about',(req,res)=>{
    res.render('about',{title: 'about'});
});

app.get('/contact',(req,res)=>{
    res.render('contact',{title: 'contact'});
});
//server listen

app.listen(3000);

console.log('server is runing')