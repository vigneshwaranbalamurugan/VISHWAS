// farmerController.js
import Farmer from '../models/Farmer.js';

export const storeFarmerData = async (req, res) => {
    try {
        const {
            farmerData
        } = req.body;


        // Create a new farmer instance
        const newFarmer = new Farmer(farmerData);

        // Save the farmer data to the database
        const savedFarmer = await newFarmer.save();

        res.status(201).json({ message: "Farmer data saved successfully", farmer: savedFarmer });
    } catch (error) {
        res.status(500).json({ message: "Failed to save farmer data", error: error.message });
    }
};
