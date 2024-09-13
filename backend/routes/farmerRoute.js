import express from 'express';
import { registerFarmer, requestOTP, verifyOTP } from "../authentication/registerAuth.js";
import { loginFarmer } from '../authentication/loginAuth.js';
import { storeCropRequestData, getCropRequests } from '../controllers/futurecon.js';

import {
  getOrdersByFarmer,
  createOrder,
  updateStage,
  deleteOrder
} from '../controllers/orderController.js';

import { storeFarmerRequestData, getFarmerRequests,acceptFarmerRequest, rejectFarmerRequest } from '../controllers/farmerreq.js';

const farmerRouter = express.Router();

farmerRouter.post('/request-otp', requestOTP);
farmerRouter.post('/verify-otp', verifyOTP);
farmerRouter.post('/register', registerFarmer);
farmerRouter.post('/login', loginFarmer);
farmerRouter.post('/futurecon', storeCropRequestData);
farmerRouter.get('/futureco', getCropRequests);

farmerRouter.get('/orders/farmer/:farmerId', getOrdersByFarmer);
farmerRouter.post('/orders', createOrder);
farmerRouter.patch('/orders/:orderId/stage', updateStage);
farmerRouter.delete('/orders/:orderId', deleteOrder);



farmerRouter.post('/farreq',storeFarmerRequestData);
farmerRouter.get('/freq', getFarmerRequests);
farmerRouter.post('/accept/:id', acceptFarmerRequest);
farmerRouter.delete('/reject/:id', rejectFarmerRequest);
export default farmerRouter;

