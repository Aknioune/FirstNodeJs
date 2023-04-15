const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'Myemail@gmail.com',
pass: 'Myemail_password'
}
});

// setup email data with unicode symbols
let mailOptions = {
from: 'Myemail@gmail.com',
to: 'recipient_email@example.com',
subject: 'Hello from Node.js!',
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
return console.log(error);
}
console.log('Message sent: %s', info.messageId);
});