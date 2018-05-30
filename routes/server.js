var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

sendemail = function(request, response, next) {
	/* console.log(request.body);
	let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false // true for 465, false for other ports
    });
    var mailOptions = {
        from: info@techbotz.in,
        to: 'info@techbotz.in', //get from form input field of html file
        subject: 'New Contact',
        text: request.body.message
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    next();
    console.log(request.body);
    console.log(transporter);
    console.log(mailOptions); */
	
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
sgMail.setApiKey('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');
const msg = {
  to: 'info@techbotz.in',
  from: request.body.email,
  subject: 'New Contact',
  text: request.body.message,
};
sgMail.send(msg);
};

router.use("/sendemail", sendemail);
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('node running');
});



module.exports = router;