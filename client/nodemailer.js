const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jersson.rp91@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'jersson.rp91@gmail.com',
  to: 'cvjersson.rp91@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
