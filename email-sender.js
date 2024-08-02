// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alvinmureithi1gmail@gmail.com',
    pass: 'your-password'
  }
});

// Setup email data
let mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Testing Nodemailer',
  text: 'Hello from Node.js',
  html: '<b>Hello from Node.js</b>'
};

// Send email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error occurred:', err);
  } else {
    console.log('Email sent:', info.response);
  }
});
