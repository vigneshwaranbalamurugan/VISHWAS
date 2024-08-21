import mongoose from "mongoose";

const aadhaarSchema = new mongoose.Schema({
    aadhaarNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^\d{12}$/, 
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^\d{10}$/, 
    },
});

const Aadhaar = mongoose.model('Aadhaar', aadhaarSchema);

export default Aadhaar;