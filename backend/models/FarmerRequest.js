import mongoose from 'mongoose';

// Define the schema for farmer details
const farmerRequestSchema = new mongoose.Schema({
  farmerName: { type: String, required: true },
  location: { type: String, required: true },
  landArea: { type: Number, required: true }, // in acres
  quantity: { type: Number, required: true }, // in kilograms
  duration: { type: Number, required: true }, // duration in days
  availableDate: { type: Date, required: true }, // date by which the crop will be available
  additionalNotes: { type: String, required: false }, // Optional additional notes
  profileUrl: { type: String, required: false }, // Optional field for farmer's profile URL
  status: { type: String, default: 'Pending' } // Add status field with default value
}, { timestamps: true });

// Create the model from the schema
const FarmerRequest = mongoose.model('FarmerRequest', farmerRequestSchema);

export default FarmerRequest;
