import mongoose from 'mongoose';

// Updated schema to include phoneNumber
const cropRequestSchema = new mongoose.Schema({
  cropType: { type: String, required: true },
  estimatedEndDate: { type: Date, required: true },
  quantity: { type: Number, required: true },
  requestDetails: { type: String, required: true },
  phoneNumber: { type: String, required: true }, // Added phone number field
});

const CropRequest = mongoose.model('CropRequest', cropRequestSchema);

export default CropRequest;