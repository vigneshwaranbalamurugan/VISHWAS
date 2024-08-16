import express from 'express';
import { registerFarmer } from "../authentication/registerAuth";
import { loginFarmer } from '../authentication/loginAuth';

const farmerRouter = express.Router();

farmerRouter.post('/register',registerFarmer);
farmerRouter.post('/login',loginFarmer);

export default farmerRouter;