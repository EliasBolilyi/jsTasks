var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'boliliy.el@gmail.com',
        pass: 'password'
    }
});
  
var mailOptions = {
    from: 'boliliy.el@gmail.com',
    to: 'boliliy.el@gmail.com',
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