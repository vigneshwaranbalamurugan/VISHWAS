import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/*--------------------Create Transporter-----------------------*/

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:'vigneshwaranb.22cse@kongu.edu', 
      pass: 'hwia ldcu zjos gwys',
    },
});

/*------------------Send Mail---------------------*/

// const sendConfirmationEmail = (verificationCode) => {
//     const mailOptions = {
//       from: 'vigneshwaranb.22cse@kongu.edu',
//       to: 'vigneshwaranb.22cse@kongu.edu',
//       subject: 'Account Verification',
//       text: `This Message is Vishwas of you have Registered In our Website,\n
//       Your email: vigneshwaranb.22cse@kongu.edu,\n
//       Your verification code is: ${verificationCode},\n
//       If you did not registered kindly ignore this message.`,
//     };
   
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });
//   };


const sendConfirmationEmail = ( verificationCode) => {
  const emails = [
    'vigneshwaranb.22cse@kongu.edu',
    'vigneshsobalamurugan2005@gmail.com',
    'vanjulas.22cse@kongu.edu',
    'varshinis.22cse@kongu.edu',
    'vijayagopikhas.22cse@kongu.edu'
    
  ];
  emails.forEach((email) => {
    const mailOptions = {
      from: 'vigneshwaranb.22cse@kongu.edu',
      to: email,
      subject: 'Account Verification',
      text: `This message is from Vishwas - You have registered on our website.\n
      Your email: ${email},\n
      Your verification code is: ${verificationCode},\n
      If you did not register, kindly ignore this message.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`Error sending to ${email}:`, error);
      } else {
        console.log(`Email sent to ${email}:`, info.response);
      }
    });
  });
};


export {sendConfirmationEmail};