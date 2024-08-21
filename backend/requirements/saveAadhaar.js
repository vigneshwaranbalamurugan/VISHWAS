import Aadhaar from "../models/aadharModel.js";

export const saveAadhaar = async (req, res) => {
    try {
        const { aadhaarNum,phoneNumber} = req.body;
        if (!/^\d{12}$/.test(aadhaarNum)) {
            return res.status(400).json({ message: 'Invalid Aadhaar number. It must be exactly 12 digits.' });
        }

        // Validate phone number length
        if (!/^\d{10}$/.test(phoneNumber)) {
            return res.status(400).json({ message: 'Invalid phone number. It must be exactly 10 digits.' });
        }

        // Check if Aadhaar number already exists
        const existingAadhaar = await Aadhaar.findOne({ aadhaarNumber: aadhaarNum });
        if (existingAadhaar) {
            return res.status(400).json({ message: 'Aadhaar number already exists.' });
        }

        // Save the Aadhaar
        const aadhaar = new Aadhaar({
            aadhaarNumber: aadhaarNum,
            phoneNumber: phoneNumber,
        });

        await aadhaar.save();

        res.status(201).json({ message: 'Aadhaar saved successfully.' });
    } catch (error) {
        console.error('Error getting OTP:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};