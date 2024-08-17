import Farmer from "../models/farmerModel.js";

export const registerFarmer = async (req,res) =>{
    try {
        const {firstName,middleName,lastName,phoneNumber,email,dateOfBirth,password}=req.body;
        if (!firstName || !phoneNumber || !email || !dateOfBirth || !password) {
            return res.status(400).json({ message: 'All fields are required' });
          }
        const newFarmer= new Farmer({
            userName:{
                firstName,
                middleName,
                lastName
            },
            mobileNumber:phoneNumber,
            email,
            dateOfBirth,
            password
        });
        await newFarmer.save();
        return res.status(201).json({ message: 'User registered successfully' });
    }catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};