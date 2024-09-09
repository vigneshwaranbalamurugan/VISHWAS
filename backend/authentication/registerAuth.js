import Farmer from "../models/farmerModel.js";
import { generateVerificationCode, verificationStore, verifiedNumber,sendSms } from "../utils/genrateMobOTP.js";


export const requestOTP = async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        const existingUser = await Farmer.findOne({
            mobileNumber:phoneNumber
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User is already exists in this Mobile Number' });
        }
        const otp = generateVerificationCode();
        console.log(otp);
        verificationStore.set(phoneNumber, otp);
        // sendSms(phoneNumber,otp,"Signup");
        res.status(201).json({ message: `OTP sent to your Mobile - ${phoneNumber}` });
    } catch (error) {
        console.error('Error getting OTP:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const verifyOTP = async (req, res) => {
    try {
        const { phoneNumber, otp } = req.body;
        const storedCode = verificationStore.get(phoneNumber);
        if (storedCode && storedCode == otp) {
            verifiedNumber.set(phoneNumber, true);
            res.status(201).json({ message: 'Account verified!' });
            verificationStore.delete(phoneNumber);
        } else {
            res.status(400).send('Invalid verification code');
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const registerFarmer = async (req, res) => {
    try {
        const {  phoneNumber,password,userRole } = req.body;
        if (!phoneNumber ||!userRole|| !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await Farmer.findOne({
            mobileNumber:phoneNumber
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User is already exists in this Mobile Number' });
        }

        const isverified = verifiedNumber.get(phoneNumber);

        if (!isverified) {
            return res.status(400).json({ message: `Mobile Number - ${phoneNumber} is not Verified yet!` });
        }

        const newFarmer = new Farmer({
            mobileNumber: phoneNumber,
            role:userRole,
            password
        });
        await newFarmer.save();
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};