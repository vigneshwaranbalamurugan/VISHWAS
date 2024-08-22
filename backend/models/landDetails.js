import mongoose from 'mongoose';
import Aadhaar from './aadharModel.js';
import State from './stateModel.js';
import City from './cityModel.js';

const LandDetailsSchema = new mongoose.Schema({
  farmerName: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true,
  },
  aadhaarNumber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Aadhaar', 
    required: true
  },
  landholdingType: {
    type: String,
    enum: ['Owned', 'Leased', 'Rented'], 
    required: true
  },
  surveyNumber: {
    type: String,
    unique: true,
    trim: true
  },
  subDivisionNumber: {
    type: String,
    trim: true,
    required:true
  },
  extentOfLand: {
    type: Number,
    required: true
  },
  landUse: {
    type: String,
    enum: ['Agriculture', 'Residential', 'Commercial'], 
    required: true
  },
  irrigationSource: {
    type: String,
    enum: ['Well', 'Canal', 'Rainwater'],
    required: true
  },
  soilType: {
    type: String,
    required: true,
    trim: true
  },
  dateOfRegistration: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: String,
    default: '0000-00-00'
  },
  remarks: {
    type: String,
    trim: true,
    default: '' 
  }
});

const Land = mongoose.model('Land', LandDetailsSchema);

export default Land;
