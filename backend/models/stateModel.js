import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
});

const State = mongoose.model('State', stateSchema);

export default State;