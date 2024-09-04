// farmerController.js
import FarmerDetails from '../models/farmerdetails.js';
import Farmer from '../models/farmerModel.js'

export const storeFarmerData = async (req, res) => {
    try {
       
        const farmerData={
            mobileNumber:'8940790989',
            personalIdentification:{
                aadhaarNumber:req.body.aadhaar
            },
            personalInfo:{
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                gender:req.body.gender,
                age:req.body.age,
                dob:req.body.dob
            },
            locationInfo:{
                state:req.body.selectedState,
                district:req.body.selectedDistrict,
                pincode:req.body.pincode,
                longitude:req.body.longitude,
                latitude:req.body.lantitude,
                address:req.body.address
            },
            landDetails:{
                farmSize:req.body.farmSize,
                yearsOfExperience:req.body.yearsOfExperience,
                farmingMethods:req.body.farmingMethods,
                irrigationMethods:req.body.irrigation,
                pesticideMethods:req.body.pesticide
            }
        };
        const newFarmer = new FarmerDetails(farmerData);
        const savedFarmer = await newFarmer.save();

        res.status(201).json({ message: "Farmer data saved successfully", farmer: savedFarmer });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to save farmer data", error: error.message });
    }
};
