import cloudinary from '../lib/cloudinary.js';
import BuyerDetails from '../models/buyerdetails.js';
import Farmer from '../models/farmerModel.js'

export const storeBuyerData = async (req, res) => {
    try {
        console.log("hi");
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
            companyDetails: req.body.companyDetails
        };

        const newBuyer = new BuyerDetails(farmerData);
        await newBuyer.save();
        await Farmer.findOneAndUpdate(
            { mobileNumber }, 
            { isfilled: true }, 
            { new: true }
        );
        res.status(201).json({ message: "Farmer data saved successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to save farmer data", error: error.message });
    }
};


export const getCompanyData = async (req,res) =>{ 
    const  mobileNumber  = req.body.mobileNumber;
    try {
        const buyer = await BuyerDetails.findOne({ mobileNumber: mobileNumber});
        if (!buyer) {
          return res.status(404).json({ message: 'Farmer not found' });
        }
        res.status(201).json(buyer);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error });
      }    

};