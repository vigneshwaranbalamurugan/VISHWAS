import mongoose from "mongoose";
import State from "./stateModel.js";

const citySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'State',
      required: true,
    },
});

const City = mongoose.model('City', citySchema);

export default City;