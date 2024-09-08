// CropRequest.js
import mongoose from 'mongoose';

const cropRequestSchema = new mongoose.Schema({
  cropType: { type: String, required: true },
  estimatedEndDate: { type: Date, required: true },
  quantity: { type: Number, required: true },
  requestDetails: { type: String, required: true },
  // Add other fields as needed
});

const CropRequest = mongoose.model('CropRequest', cropRequestSchema);

export default CropRequest;
