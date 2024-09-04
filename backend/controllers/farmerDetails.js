// farmerController.js
import Farmer from '../models/Farmer.js';

export const storeFarmerData = async (req, res) => {
    try {
        const {
            capturedImage,
            aadhaar,
            firstName,
            lastName,
            email,
            gender,
            age,
            dob,
            selectedState,
            pincode,
            selectedDistrict,
            latitude,
            longitude,
            address,
            formDetails
        } = req.body;

        // Map the incoming data to the Farmer schema structure
        const farmerData = {
            personalIdentification: {
                photo: capturedImage,
                aadhaarNumber: aadhaar,
            },
            personalInfo: {
                firstName,
                lastName,
                email,
                gender,
                age,
                dob,
            },
            locationInfo: {
                state: selectedState,
                district: selectedDistrict,
                pincode,
                latitude,
                longitude,
                address,
            },
            landDetails: formDetails.landDetails, // Assuming formDetails contains land details
        };

        // Create a new farmer instance
        const newFarmer = new Farmer(farmerData);
        
        // Save the farmer data to the database
        const savedFarmer = await newFarmer.save();
        
        res.status(201).json({ message: "Farmer data saved successfully", farmer: savedFarmer });
    } catch (error) {
        res.status(500).json({ message: "Failed to save farmer data", error: error.message });
    }
};
