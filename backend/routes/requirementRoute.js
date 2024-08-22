import express from 'express';
import { saveState,getState } from '../requirements/stateDetails.js';
import { saveCity,getCity} from '../requirements/cityDetails.js';
import { saveAadhaar } from '../requirements/saveAadhaar.js';
import { saveLand } from '../requirements/landDetails.js';
import { getLandOTP,verifyLandOTP} from '../controllers/verifyLandDetails.js';

const requirementRouter = express.Router();

requirementRouter.post('/save-state',saveState);
requirementRouter.post('/save-city',saveCity);
requirementRouter.post('/save-aadhaar',saveAadhaar);
requirementRouter.post('/save-land',saveLand);

requirementRouter.get('/get-state',getState);
requirementRouter.post('/get-city',getCity);
requirementRouter.post('/get-land-otp',getLandOTP);
requirementRouter.post('/verify-land-otp',verifyLandOTP);


export default requirementRouter;