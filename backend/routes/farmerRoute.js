import express from 'express';
import { registerFarmer,requestOTP,verifyOTP} from "../authentication/registerAuth.js";
import { loginFarmer } from '../authentication/loginAuth.js';
import { storeCropRequestData, getCropRequests } from '../controllers/futurecon.js';
import { storeFarmerRequestData, getFarmerRequests } from '../controllers/farmerreq.js';
const farmerRouter = express.Router();

farmerRouter.post('/request-otp',requestOTP);
farmerRouter.post('/verify-otp',verifyOTP);
farmerRouter.post('/register',registerFarmer);
farmerRouter.post('/login',loginFarmer);
farmerRouter.post('/futurecon',storeCropRequestData);
farmerRouter.get('/futureco', getCropRequests);
farmerRouter.post('/farreq',storeFarmerRequestData);
farmerRouter.get('/freq', getFarmerRequests);
export default farmerRouter;