import express from 'express';
import { registerFarmer } from "../authentication/registerAuth";

const farmerRouter = express.Router();

farmerRouter.post('/register',registerFarmer);

export default farmerRouter;