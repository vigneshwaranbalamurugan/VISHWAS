import dotenv from 'dotenv';

dotenv.config();

const verificationStore = new Map();
const verifiedNumber = new Map();

const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
};


export {verificationStore,generateVerificationCode,verifiedNumber};