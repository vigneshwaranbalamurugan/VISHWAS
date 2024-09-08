import express from 'express';
import { registerFarmer, requestOTP, verifyOTP } from "../authentication/registerAuth.js";
import { loginFarmer } from '../authentication/loginAuth.js';
import { getAadhaarOTP, verifyAadhaarOTP } from '../controllers/verifyAadhar.js';
import { storeFarmerData,getFarmerData } from '../controllers/farmerDetails.js'; 
import { storeCropRequestData, getCropRequests } from '../controllers/futurecon.js';


const farmerRouter = express.Router();

farmerRouter.post('/request-otp', requestOTP);
farmerRouter.post('/verify-otp', verifyOTP);
farmerRouter.post('/register', registerFarmer);
farmerRouter.post('/login', loginFarmer);
farmerRouter.post('/get-aadhaar-otp', getAadhaarOTP);
farmerRouter.post('/verify-aadhaar-otp', verifyAadhaarOTP);
farmerRouter.post('/store-farmer-data', storeFarmerData);
farmerRouter.post('/get-farmer-data', getFarmerData);
farmerRouter.post('/futurecon',storeCropRequestData);
farmerRouter.get('/futureco', getCropRequests);


export default farmerRouter;
