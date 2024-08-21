import dotenv from 'dotenv';

require(dotenv.config());

const verificationStore = new Map();
const verifiedNumber = new Map();

const twilio = require('twilio');

const client = twilio(process.env.AC7f3651cc73691658de1aa966dd6cba29, process.env.0f111bfedc1f229077012b5486ee23d6);


const generateVerificationCode = () => {
    client.messages.create({
        body: 'Hello from Twilio!',
        from: process.env.+19542895323,
        to: '+1234567890'  
    })
    .then(message => console.log(`Message sent with SID: ${message.sid}`))
    .catch(error => console.error('Error sending message:', error));
    return Math.floor(100000 + Math.random() * 900000);
};



export {verificationStore,generateVerificationCode,verifiedNumber};