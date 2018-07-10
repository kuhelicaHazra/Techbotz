const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
exports.sendEmail = functions.https.onRequest((request, response) => {
    sgMail.setApiKey('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');
    const subj = 'New Contact From ' + request.body.email;
    const textmsg = request.body.message + '-------------------- FROM: ' + request.body.name + '   PHONE: ' + request.body.mobile + '   EMAIL: ' + request.body.email;
    const msg = {
        to: 'info@techbotz.in',
        from: request.body.email,
        subject: subj,
        text: textmsg,
    };
    try {
        sgMail.send(msg);
        response.send('Email Sent Successfully');
    } catch (ex) {
        response.send(`Error ${ex}`);
    }

});