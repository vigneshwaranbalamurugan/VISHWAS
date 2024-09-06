import cloudinary from '../lib/cloudinary.js';
import FarmerDetails from '../models/farmerdetails.js';
import Farmer from '../models/farmerModel.js'

export const storeFarmerData = async (req, res) => {
    try {
        const photoUrl = (await cloudinary.v2.uploader.upload(req.body.capturedImage, { folder: 'farmer_photos' })).secure_url
        console.log(req.body.mobileNumber);
        const  mobileNumber= req.body.mobileNumber;
        const farmerData = {
            mobileNumber: req.body.mobileNumber,
            personalIdentification: {
                photo: photoUrl,
                aadhaarNumber: req.body.aadhaar
            },
            personalInfo: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                age: req.body.age,
                dob: req.body.dob
            },
            locationInfo: {
                state: req.body.selectedState,
                district: req.body.selectedDistrict,
                pincode: req.body.pincode,
                longitude: req.body.longitude,
                latitude: req.body.lantitude,
                address: req.body.address
            },
            landDetails: req.body.formDetails
        };

        await Farmer.findOneAndUpdate(
            { mobileNumber }, 
            { isfilled: true }, 
            { new: true }
        );
        const newFarmer = new FarmerDetails(farmerData);
        const savedFarmer = await newFarmer.save();

        res.status(201).json({ message: "Farmer data saved successfully", farmer: savedFarmer });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to save farmer data", error: error.message });
    }
};
