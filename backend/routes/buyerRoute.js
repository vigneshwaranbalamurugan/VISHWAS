import express from 'express';
import { getCompanyData, storeBuyerData } from '../controllers/buyerDetails.js';

const buyerRouter = express.Router();
buyerRouter.post('/store-buyer-data', storeBuyerData);
buyerRouter.post('/get-buyer-data', getCompanyData);

export default buyerRouter;
