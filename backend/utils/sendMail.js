import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/*--------------------Create Transporter-----------------------*/

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:'vigneshsobalamurugan2005@gmail.com', 
      pass: 'fsum hfnq rlns oyms',
    },
});

/*------------------Send Mail---------------------*/

const sendConfirmationEmail = (verificationCode) => {
    const mailOptions = {
      from: 'vigneshsobalamurugan2005@gmail.com',
      to: 'vanjulas.22cse@kongu.edu',
      subject: 'Account Verification',
      text: `This Message is Vishwas of you have Registered In our Website,\n
      Your email: vanjulas.22cse@kongu.edu,\n
      Your verification code is: ${verificationCode},\n
      If you did not registered kindly ignore this message.`,
    };
   
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };



export {sendConfirmationEmail};