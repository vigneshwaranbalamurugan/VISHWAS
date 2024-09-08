// FarmerRequest.js
import mongoose from 'mongoose';

// Define the schema for farmer details
const farmerRequestSchema = new mongoose.Schema({
  farmerName: { type: String, required: true },
  location: { type: String, required: true },
  landArea: { type: Number, required: true }, // in acres
  quantity: { type: Number, required: true }, // in kilograms
  duration: { type: Number, required: true }, // duration in days
  availableDate: { type: Date, required: true }, // date by which the crop will be available
  profileUrl: { type: String, required: false }, // optional field for farmer's profile URL
  // Add other fields as needed
}, { timestamps: true });

// Create the model from the schema
const FarmerRequest = mongoose.model('FarmerRequest', farmerRequestSchema);

export default FarmerRequest;
