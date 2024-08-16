import User from "../models/usersModel";

export const registerUser = async (req,res) =>{
    try {
        const {}=req.body;
    }catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

};