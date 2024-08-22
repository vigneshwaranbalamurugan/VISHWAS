import Land from "../models/landDetails.js";
import State from "../models/stateModel.js";
import City from "../models/cityModel.js";
import Aadhaar from "../models/aadharModel.js";

export const saveLand = async (req, res) => {

    try {
        const { farmerName,address,landholdingType,surveyNumber,subDivisionNumber,extentOfLand,landUse,
            irrigationSource,soilType,dateOfRegistration,lastUpdated,remarks,state, city, aadhaarNumber } = req.body;
        
            const existingState = await State.findOne({
            name: state
        });
        const existingCity = await City.findOne({
            name: city
        });
        const existingAadhar = await Aadhaar.findOne({
            aadhaarNumber: aadhaarNumber
        });

        if (!existingState || !existingCity || !existingAadhar) {
            return res.status(400).json({ message: 'Existing not found!' });

        }

        const newland = new Land({
            farmerName,
            address,
            state: existingState._id, 
            city: existingCity._id,
            aadhaarNumber:existingAadhar._id, 
            landholdingType,
            surveyNumber,
            subDivisionNumber,
            extentOfLand,
            landUse,
            irrigationSource,
            soilType,
            dateOfRegistration,
            lastUpdated,
            remarks
        });

        await newland.save();
        return res.status(201).json({ message: 'Land details stored successfully' });
    } catch (error) {
        console.error('Error getting OTP:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};