import Aadhaar from "../models/aadharModel.js";
import { sendSms,aadharStore,generateVerificationCode } from "../utils/genrateMobOTP.js";

export const getAadhaarOTP =async (req, res) =>{
    try{
        const {AadhaarNumber} = req.body;
        const aadhar = await Aadhaar.findOne({aadhaarNumber:AadhaarNumber });
        if(!aadhar){
            return res.status(400).json({ message: 'Aadhaar not found!' });
        }
        const phoneNumber = aadhar.phoneNumber;
        const otp=generateVerificationCode();
        sendSms(phoneNumber,otp,"Aadhar Verify");
        aadharStore.set(AadhaarNumber, otp);
        res.status(201).json({ message: `OTP sent to your Mobile linked with aadhar` });
    }catch (error) {
        console.error('Error getting OTP:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const verifyAadhaarOTP =async (req, res) =>{
    try{
        const { aadhaar, otp} = req.body;
        const storedCode = aadharStore.get(aadhaar);
        if (storedCode && storedCode == otp) {
            aadharStore.delete(aadhaar);
            res.status(201).json({ message: 'Account verified!' });
        } else {
            res.status(400).send('Invalid verification code');
        }

    }catch (error) {
        console.error('Error getting OTP:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};