import dotenv from 'dotenv';
import twilio from 'twilio';
dotenv.config();

const verificationStore = new Map();
const verifiedNumber = new Map();
const aadharverificationStore = new Map();
const aadharStore = new Map();

const client = new twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);

const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

const sendSms = async (senderNum,otp,purpose) => {
    try {
      const message = await client.messages.create({
        body: `Hello! This is the otp for ${purpose} your account to Vishwas App.\nMobile Number-${senderNum}\nOTP-${otp}\nIf your are not initiate this kindly ignore this message.`, 
        from: process.env.TWILIO_PHONE_NUMBER, 
        to: `+91${senderNum}`
      });
      console.log(`Message sent successfully with SID: ${message.sid}`);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

export {verificationStore,generateVerificationCode,verifiedNumber,sendSms,aadharverificationStore,aadharStore};