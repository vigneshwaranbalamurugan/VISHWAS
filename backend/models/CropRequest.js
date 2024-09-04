import mongoose from "mongoose";

const CropRequestSchema = new mongoose.Schema({
  cropType: {
    type: String,
    required: true,  // Specifies the crop type (e.g., Wheat, Rice)
  },
  estimatedEndDate: {
    type: Date,
    required: true,  // Specifies the expected date when the crop is needed
  },
  quantity: {
    type: Number,
    required: true,  // Specifies the quantity of the crop in kilograms
  },
  requestDetails: {
    type: String,
    required: true,  // Provides additional details or requirements for the request
  },
});

const CropRequest = mongoose.model('CropRequest', farmerSchema);

export default CropRequest;