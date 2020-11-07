const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { urlencoded } = require("body-parser");

const app=express();

//middleware

app.use(bodyParser.json());

app.use(urlencoded({extended:false}));

//route 
app.get('/',(req,res)=>{
    res.send('Hello world!');
});

//server listen

app.listen(3000);

console.log('server is runing')