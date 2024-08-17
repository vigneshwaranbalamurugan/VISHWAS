import express from 'express';
import { registerFarmer } from "../authentication/registerAuth.js";
import { loginFarmer } from '../authentication/loginAuth.js';

const farmerRouter = express.Router();

farmerRouter.post('/register',registerFarmer);
farmerRouter.post('/login',loginFarmer);

export default farmerRouter;