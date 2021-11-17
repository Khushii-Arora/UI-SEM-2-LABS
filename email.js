var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'extraaID379@gmail.com',
    pass: '12345_khushi'
  }
});

var mailOptions = {
  from: 'extraaID379@gmail.com',
  to: 'akhushi72@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'You have received a mail!!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});