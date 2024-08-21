import express from 'express';
import { saveState } from '../requirements/stateDetails.js';
import { saveCity } from '../requirements/cityDetails.js';

const requirementRouter = express.Router();

requirementRouter.post('/save-state',saveState);
requirementRouter.post('/save-city',saveCity);

export default requirementRouter;