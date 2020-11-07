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
app.post('/contact/send', function(req, res){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'your@email.com',
			pass: 'password'
		}
	});

	var mailOptions = {
		from: 'Brad Traversy <techguyinfo@gmail.com>',
		to: 'support@joomdigi.com',
		subject: 'Website Submission',
		text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
		html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
    });
});
//server listen

app.listen(3000);

console.log('server is runing')