import mongoose from 'mongoose';

const cropRequestSchema = new mongoose.Schema({
  cropName: { type: String, required: true },              
  cropType: { type: String, required: true },                
  category: { type: String, required: true },               
  pricePerKg: { type: Number, required: true },           
  quantity: { type: String, required: true },              
  location: { type: String, required: true },            
  imageUrl: { type: String, required: true },              
  estimatedMonth: { type: String, required: true },         
  contractorprofile:{type:String,required:true},               
  deliveryType: { type: String, required: true },           
  paymentMethod: { type: String, required: true },           
  requestDetails: { type: String, required: true },        
  estimatedEndDate: { type: Date, required: true },          
  createdAt: { type: Date, default: Date.now },             
  status: { type: String, default: "Pending" },            
});

const CropRequest = mongoose.model('CropRequest', cropRequestSchema);

export default CropRequest;
