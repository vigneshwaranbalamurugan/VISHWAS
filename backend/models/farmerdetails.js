const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
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
      type: Date,
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
    irrigationMethods: {
      type: String,
      required: true,
    },
    pesticideMethods: {
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
        location: {
          type: String,
          required: true,
        },
        landImage: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model('Farmer', FarmerSchema);
