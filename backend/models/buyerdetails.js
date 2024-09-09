import mongoose from "mongoose";

const BuyerSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        minlength: 10,
        maxlength: 10,
        unique: true,
        required: true
    },
    personalIdentification: {
        photo: {
            type: String,
            required: true,
        },
        aadhaarNumber: {
            type: String,
            required: true,
        },
    },
    personalInfo: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        dob: {
            type: String,
            required: true,
        },
    },
    locationInfo: {
        state: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        pincode: {
            type: String,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
        latitude: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    companyDetails: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        establishedYear: {
            type: Number,
            required: true
        },
        tinNumber: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        website: {
            type: String,
            required: true
        },
        ceoName: {
            type: String,
            required: true
        },
        headquartersLocation: {
            type: String,
            required: true
        },
    },
});

const BuyerDetails = mongoose.model('BuyerDetail', BuyerSchema);

export default BuyerDetails;