var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pablomiranda.cl@gmail.com',
    pass: 'gm2222gm'
  }
});
 
var mailOptions = {
  from: 'pablomiranda.cl@gmail.com',
  to: 'pablomiranda.cl@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


module.exports.Enviar= function (req)
{
 return new Promise
 (
  function (resolve,reject)
  {
  transporter.sendMail(mailOptions,
  function(error, info){
  if (error) {
    console.log(error);
    reject(error);
  } else {
    console.log('Email sent: ' + info.response);
    resolve(info);
  }
});
}
);
}