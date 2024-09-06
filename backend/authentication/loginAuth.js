import bcrypt from "bcryptjs";
import Farmer from "../models/farmerModel.js";

export const loginFarmer = async (req,res) =>{
    const {mobileNumber,password}=req.body;
    console.log(mobileNumber,password);
    try{
        const userauth = await Farmer.findOne({ mobileNumber: mobileNumber }).select(
            '+password'
        );
        if (!userauth) {
            return res.status(401).json({ message: 'Account not found!' });
        }
        if (!bcrypt.compareSync(password, userauth.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const userdetails={
            userid:userauth._id,
            userdetailsfill:userauth.isfilled,
            userRole:userauth.role,
        }
        console.log('su');
        return res.status(201).json({userdetails,message:'Login Sucessfully'});
    }catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};