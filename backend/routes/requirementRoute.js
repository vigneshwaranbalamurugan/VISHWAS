import express from 'express';
import { saveState } from '../requirements/stateDetails.js';
import { saveCity } from '../requirements/cityDetails.js';
import { saveAadhaar } from '../requirements/saveAadhaar.js';

const requirementRouter = express.Router();

requirementRouter.post('/save-state',saveState);
requirementRouter.post('/save-city',saveCity);
requirementRouter.post('/save-aadhaar',saveAadhaar);

export default requirementRouter;