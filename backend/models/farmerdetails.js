import mongoose from "mongoose";

const FarmerSchema = new mongoose.Schema({
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
  landDetails: {
    farmSize: {
      type: Number,
      required: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    farmingMethods: {
      type: String,
      required: true,
    },
    irrigation: {
      type: String,
      required: true,
    },
    pesticide: {
      type: String,
      required: true,
    },
    lands: [
      {
        surveyNumber: {
          type: String,
          required: true,
        },
        subdivisionNumber: {
          type: String,
          required: true,
        },
        soilType: {
          type: String,
          required: true,
        },
        landSize: {
          type: String,
          required: true,
        },
        landLocation: {
          type: String,
          required: true,
        }
      },
    ],
  },
});

const FarmerDetails = mongoose.model('FarmerDetail', FarmerSchema);

export default FarmerDetails;