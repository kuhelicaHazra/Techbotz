const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
exports.sendEmail = functions.https.onRequest((request, response) => {
    sgMail.setApiKey('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');
    const msg = {
      to: 'info@techbotz.in',
      from: request.body.email,
      subject: 'New Contact',
      text: request.body.message,
    };
    try{
        sgMail.send(msg);
        response.send('Email Sent Successfully');
    }
    catch(ex) {
        response.send(`Error ${ex}`);
    }
    
});